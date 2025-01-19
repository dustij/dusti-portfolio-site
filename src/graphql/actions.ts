"use server";

import "server-only";

import { DEFAULT_ARTICLES_PER_PAGE } from "~/lib/constants";
import { client } from "./apollo";
import {
  ArticleSlug,
  ArticleWithContent,
  ArticleWithSlug,
  GET_ALL_ARTICLES,
  GET_ALL_SLUGS,
  GET_ARTICLE_BY_SLUG,
  GET_ARTICLES_PAGINATION,
} from "./queries";

// TODO: look into: https://www.apollographql.com/docs/react/data/refetching
export async function fetchArticles({
  start = 0,
  limit = DEFAULT_ARTICLES_PER_PAGE,
}): Promise<{ articles: ArticleWithSlug[]; total: number }> {
  const result = await client.query({
    query: GET_ARTICLES_PAGINATION,
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
    query: GET_ARTICLE_BY_SLUG,
    variables: { urlSlug },
    fetchPolicy: "no-cache",
  });
  return result?.data.blogPosts[0];
}

export async function fetchAllArticles(): Promise<ArticleWithSlug[]> {
  const result = await client.query({
    query: GET_ALL_ARTICLES,
    fetchPolicy: "no-cache",
  });

  return result?.data.blogPosts;
}

export async function fetchAllSlugs(): Promise<ArticleSlug[]> {
  const result = await client.query({
    query: GET_ALL_SLUGS,
    fetchPolicy: "no-cache",
  });
  return result?.data.blogPosts;
}
