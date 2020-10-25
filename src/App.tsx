import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticleView from "./components/views/Articles/Article.view";
import ArticlesView from "./components/views/Articles/Articles.view";
import "./App.scss";

export default function App(): ReactElement {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article" component={ArticleView} />
          <Route path="/" component={ArticlesView} />
        </Switch>
      </Router>
    </div>
  );
}
