import { gql } from "@apollo/client";

export const getAllArticles = gql`
  query GetAllPosts {
    blogPosts(sort: ["updatedAt:desc"]) {
      urlSlug
      title
      description
      updatedAt
    }
  }
`;

export const getArticleBySlug = gql`
  query GetSinglePost($urlSlug: String!) {
    blogPosts(filters: { urlSlug: { eq: $urlSlug } }) {
      title
      content
      description
      updatedAt
    }
  }
`;

export interface Article {
  title: string;
  description: string;
  updatedAt: string;
};

export interface ArticleWithSlug extends Article {
  urlSlug: string;
}

export interface ArticleWithContent extends Article {
  content: string;
}
