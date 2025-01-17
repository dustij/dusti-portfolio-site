import { gql } from "@apollo/client";

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    blogPosts(sort: ["updatedAt:desc"]) {
      title
      description
      updatedAt
      urlSlug
    }
  }
`;

export const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    blogPosts {
      urlSlug
    }
  }
`;

export const GET_ARTICLES_PAGINATION = gql`
  query GetArticlesPagination($pagination: PaginationArg) {
    blogPosts(pagination: $pagination, sort: ["updatedAt:desc"]) {
      title
      description
      updatedAt
      urlSlug
    }
    blogPosts_connection {
      pageInfo {
        total
      }
    }
  }
`;

export const GET_ARTICLE_BY_SLUG = gql`
  query GetArticleBySlug($urlSlug: String!) {
    blogPosts(filters: { urlSlug: { eq: $urlSlug } }) {
      title
      description
      content
      updatedAt
    }
  }
`;

export interface Article {
  title: string;
  description: string;
  updatedAt: string;
}

export interface ArticleWithSlug extends Article {
  urlSlug: string;
}

export interface ArticleWithContent extends Article {
  content: string;
}
