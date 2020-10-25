import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Wrapper from "../../shared/Wrapper/Wrapper";
import { GET_SINGLE_ARTICLE_INFO } from "../../../apollo/requests/article.requests";
import ArticleBody from "../../article/ArticleBody/ArticleBody";
import ArticleHeader from "../../article/ArticleHeader/ArticleHeader";

interface MatchParams {
  id: string;
}

type MatchProps = RouteComponentProps<MatchParams>;

export default function ArticleView({ match }: MatchProps): ReactElement {
  const { loading, error, data } = useQuery(GET_SINGLE_ARTICLE_INFO, {
    variables: {
      id: match.params.id,
    },
  });

  if (error) {
    console.error(error);
  }

  return (
    <Wrapper
      headerComponent={() => <ArticleHeader loading={loading} data={data} />}
    >
      <ArticleBody loading={loading} data={data} />
    </Wrapper>
  );
}
