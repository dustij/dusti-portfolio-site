"use server";

import { client } from "./apollo";
import {
  ArticleWithContent,
  ArticleWithSlug,
  getArticleBySlug,
  getArticlesPaginated,
} from "./queries";

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

export async function fetchArticleBySlug(
  urlSlug: string,
): Promise<ArticleWithContent> {
  const result = await client.query({
    query: getArticleBySlug,
    variables: { urlSlug },
    fetchPolicy: "no-cache",
  });

  return result?.data.blogPosts[0];
}
