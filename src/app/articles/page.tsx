import { Metadata } from "next";
import { fetchArticles } from "~/graphql/actions";
import ArticlePage from "./_components/ArticlePage";

// ==== ARTICLES PAGE ==== //

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All of my long-form thoughts on programming, computer science, life, and more, collected in chronological order.",
};

export default async function Articles() {
  const data = await fetchArticles(0, 2);
  return (
    <ArticlePage initialArticles={data.articles} totalCount={data.total} />
  );
}
