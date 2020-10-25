import React, { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import Wrapper from "../../shared/Wrapper/Wrapper";
import ArticlesList from "../../Articles/ArticlesList";
import { GET_ARTICLES_LIST } from "../../../apollo/requests/articles.requests";

export default function ArticlesView(): ReactElement {
  const { loading, error, data, fetchMore } = useQuery(GET_ARTICLES_LIST, {
    variables: {
      limit: 5,
      skip: 0,
    },
  });

  if (error) {
    console.error(error);
  }

  return (
    <Wrapper>
      <div>
        is a list
        <ArticlesList loading={loading} data={data} fetchMore={fetchMore} />
      </div>
    </Wrapper>
  );
}
