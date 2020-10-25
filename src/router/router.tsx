import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { ReactElement } from "react";
import ArticlesView from "../components/views/Articles/Articles.view";
import ArticleView from "../components/views/Articles/Article.view";

export default function RootRouter(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ArticlesView} />
        <Route path="/article/:id" component={ArticleView} />
      </Switch>
    </BrowserRouter>
  );
}
