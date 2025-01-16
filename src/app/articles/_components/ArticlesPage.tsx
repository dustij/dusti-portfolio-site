"use client";

import { useState } from "react";
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

export default function ArticlesPage({
  initialArticles,
  totalCount,
}: {
  initialArticles: ArticleWithSlug[];
  totalCount: number;
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [isMore, setIsMore] = useState(articles.length < totalCount);

  // TODO: implement loading state
  // TODO: implement url query string, for exmample: /blog?tag=all-tags&page=5

  async function handleLoadMore() {
    try {
      const data = await fetchArticles(articles.length, 2);

      if (data.articles) {
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setIsMore(articles.length + data.articles.length < totalCount);
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
