"use server";

import { client } from "./apollo";
import { ArticleWithSlug, getArticlesPaginated } from "./queries";

export async function fetchArticles(
  start = 0,
  limit = 8,
): Promise<{ articles: ArticleWithSlug[]; total: number }> {
  const result = await client.query({
    query: getArticlesPaginated,
    variables: { pagination: { start, limit } },
    fetchPolicy: "no-cache",
  });

  return {
    articles: result?.data.blogPosts,
    total: result?.data.blogPosts_connection.pageInfo.total,
  };
}
