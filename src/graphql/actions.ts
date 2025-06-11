"use server";

import fs from "fs";
import path from "path";
import { DEFAULT_ARTICLES_PER_PAGE } from "~/lib/constants";
import type {
  ArticleSlug,
  ArticleWithContent,
  ArticleWithSlug,
} from "./queries";

const dataDir = path.join(process.cwd(), "src", "data");

function readArticles(): ArticleWithContent[] {
  const filePath = path.join(dataDir, "articles.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export async function fetchArticles({
  start = 0,
  limit = DEFAULT_ARTICLES_PER_PAGE,
}: {
  start?: number;
  limit?: number;
}): Promise<{ articles: ArticleWithSlug[]; total: number }> {
  const articles = readArticles();
  const sliced = articles.slice(start, start + limit).map((article) => ({
    urlSlug: article.urlSlug,
    title: article.title,
    description: article.description,
    updatedAt: article.updatedAt,
  }));
  return {
    articles: sliced,
    total: articles.length,
  };
}

export async function fetchArticleBySlug(
  urlSlug: string,
): Promise<ArticleWithContent | undefined> {
  const articles = readArticles();
  return articles.find((article) => article.urlSlug === urlSlug);
}

export async function fetchAllArticles(): Promise<ArticleWithSlug[]> {
  const articles = readArticles();
  return articles.map((article) => ({
    urlSlug: article.urlSlug,
    title: article.title,
    description: article.description,
    updatedAt: article.updatedAt,
  }));
}

export async function fetchAllSlugs(): Promise<ArticleSlug[]> {
  const articles = readArticles();
  return articles.map(({ urlSlug }) => ({ urlSlug }));
}
