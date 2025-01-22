import { Metadata } from "next";
import { Card } from "~/components/Card";
import { PaginationControl } from "~/components/PaginationControl";
import { SimpleLayoutExt } from "~/components/SimpleLayout";
import { fetchArticles } from "~/graphql/actions";
import { ArticleWithSlug } from "~/graphql/queries";
import { DEFAULT_ARTICLES_PER_PAGE } from "~/lib/constants";
import { formatDate } from "~/lib/formatDate";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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

// ==== ARTICLES PAGE ==== //

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All of my long-form thoughts on programming, computer science, life, and more, collected in chronological order.",
};

export default async function Articles(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page ?? 1);
  const perPage = Number(searchParams.per_page ?? DEFAULT_ARTICLES_PER_PAGE);

  console.log("perpage", perPage);

  let articles: ArticleWithSlug[] = [];
  let total = 0;
  const start = articles.length;
  const limit = page * perPage;
  ({ articles, total } = await fetchArticles({ start, limit }));

  return (
    <SimpleLayoutExt
      title="Writing on programming, computer science, and life in general."
      intro={[
        "All of my long-form thoughts on programming, computer science, life, and more, collected in chronological order. I’m maintaining this collection as an open journal, writing articles that may take the form of notes.",
      ]}
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles && articles.length != 0 ? (
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
        <PaginationControl
          total={total}
          defaultPerPage={DEFAULT_ARTICLES_PER_PAGE}
        />
      </div>
    </SimpleLayoutExt>
  );
}
