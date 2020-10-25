import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Wrapper from "../../shared/Wrapper/Wrapper";
import ArticlesList from "../../Articles/ArticlesList";
import { GET_ARTICLES_LIST } from "../../../apollo/articles/articles.requests";

export default function ArticlesView(): ReactElement {
  const { loading, error, data, fetchMore } = useQuery(GET_ARTICLES_LIST, {
    variables: {
      limit: 5,
      skip: 0,
    },
  });

  return (
    <Wrapper>
      <div>
        is a list
        <Link to="/article">To article</Link>
        <ArticlesList loading={loading} data={data} fetchMore={fetchMore} />
      </div>
    </Wrapper>
  );
}
