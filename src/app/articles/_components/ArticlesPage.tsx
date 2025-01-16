"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ButtonIconLeft } from "~/components/Button";
import { Card } from "~/components/Card";
import { SimpleLayout } from "~/components/SimpleLayout";
import { fetchArticles } from "~/graphql/actions";
import { ArticleWithSlug } from "~/graphql/queries";
import { formatDate } from "~/lib/formatDate";

// ==== ICONS ==== //

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 3 6.25 3"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ==== ARTICLE ==== //

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.urlSlug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.updatedAt}
          className="md:hidden"
          decorate
        >
          {formatDate(article.updatedAt)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.updatedAt}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.updatedAt)}
      </Card.Eyebrow>
    </article>
  );
}

// TODO: Check out: https://www.apollographql.com/blog/how-to-use-apollo-client-with-next-js-13
export default function ArticlesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageNumber = useMemo(() => searchParams.get("page"), [searchParams]);

  const [articles, setArticles] = useState<ArticleWithSlug[]>([]);
  const [isMore, setIsMore] = useState(false);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is still mounted

    async function fetchInitialArticles() {
      try {
        const result = await fetchArticles({});

        if (isMounted && result.articles) {
          setArticles(result.articles);
          setIsMore(articles.length + result.articles.length < result.total);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching articles:", error);
        }
      }
    }

    async function fetchArticlesForPage() {
      try {
        const result = await fetchArticles({
          start: articles.length,
          multiplier: Number(pageNumber),
        });

        if (isMounted && result.articles) {
          setArticles((prevArticles) => [...prevArticles, ...result.articles]);
          setIsMore(articles.length + result.articles.length < result.total);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching articles:", error);
        }
      }
    }

    if (!pageNumber) {
      fetchInitialArticles();
    } else {
      fetchArticlesForPage();
    }

    return () => {
      isMounted = false; // Mark the component as unmounted
    };
  }, []);

  async function handleLoadMore() {
    try {
      const result = await fetchArticles({ start: articles.length });

      if (result.articles) {
        setArticles((prevArticles) => [...prevArticles, ...result.articles]);
        setIsMore(articles.length + result.articles.length < result.total);

        const number = Number(pageNumber) + 1;

        router.push(
          pathname + "?" + createQueryString("page", number.toString()),
          { scroll: false },
        );
      } else {
        console.warn(
          "Failed to fetch more articles. Apollo client may be undefined.",
        );
      }
    } catch (error) {
      console.error("Error loading more articles:", error);
    }
  }

  return (
    <SimpleLayout
      title="Writing on programming, computer science, and life in general."
      intro="All of my long-form thoughts on programming, computer science, life, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.length != 0 ? (
            articles.map((article) => (
              <Article key={article.urlSlug} article={article} />
            ))
          ) : (
            <p className="text-zinc-400 dark:text-zinc-500">
              Sorry, there's no articles yet.
            </p>
          )}
        </div>
      </div>
      <div className="mt-16 flex justify-center sm:mt-20">
        <ButtonIconLeft
          variant={"secondary"}
          disabled={!isMore}
          className=""
          icon={isMore ? ChevronDownIcon : DashIcon}
          onClick={handleLoadMore}
        >
          {isMore ? "Load more" : "No more"}
        </ButtonIconLeft>
      </div>
    </SimpleLayout>
  );
}
