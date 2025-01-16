import { gql } from "@apollo/client";

export const getAllArticles = gql`
  query GetAllPosts {
    blogPosts(sort: ["updatedAt:desc"]) {
      title
      description
      updatedAt
      urlSlug
    }
  }
`;

export const getArticlesPaginated = gql`
  query GetArticlesPaginated($pagination: PaginationArg) {
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

export const getArticleBySlug = gql`
  query GetSinglePost($urlSlug: String!) {
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
