import { gql } from "@apollo/client";

export const GET_SINGLE_ARTICLE_INFO = gql`
  query getArticlesList($id: ID!) {
    newsItem(id: $id) {
      id
      title
      content
      url
      img
      comments {
        id
        email
        createdDate
        content
      }
    }
  }
`;
