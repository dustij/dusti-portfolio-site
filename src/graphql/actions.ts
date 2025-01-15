"use server";

import { client } from "./apollo";
import { ArticleWithSlug, getArticlesPaginated } from "./queries";

export async function fetchArticles(
  start = 0,
  limit = 8,
): Promise<ArticleWithSlug[]> {
  const result = await client.query({
    query: getArticlesPaginated,
    variables: { pagination: { start, limit } },
    fetchPolicy: "no-cache",
  });

  return result?.data.blogPosts;
}
