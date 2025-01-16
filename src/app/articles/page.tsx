import { Metadata } from "next";
import { Suspense } from "react";
import { fetchArticles } from "~/graphql/actions";
import ArticlesPage from "./_components/ArticlesPage";

// ==== ARTICLES PAGE ==== //

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All of my long-form thoughts on programming, computer science, life, and more, collected in chronological order.",
};

export default async function Articles() {
  const data = await fetchArticles({});
  return (
    <Suspense>
      <ArticlesPage initialArticles={data.articles} totalCount={data.total} />
    </Suspense>
  );
}
