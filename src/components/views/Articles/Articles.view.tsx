import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../shared/Wrapper/Wrapper";
import ArticlesList from "../../Articles/ArticlesList";

export default function ArticlesView(): ReactElement {
  return (
    <Wrapper>
      <div>
        is a list
        <Link to="/article">To article</Link>
        <ArticlesList />
      </div>
    </Wrapper>
  );
}
