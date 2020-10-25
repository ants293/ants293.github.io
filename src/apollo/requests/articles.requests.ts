import { gql } from "@apollo/client";

export const GET_ARTICLES_LIST = gql`
  query getArticlesList($skip: Int!, $limit: Int!) {
    newsList(skip: $skip, limit: $limit) {
      totalRows
      rows {
        id
        title
        img
      }
    }
  }
`;
