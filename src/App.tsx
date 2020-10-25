import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ArticleView from "./components/views/Articles/Article.view";
import ArticlesView from "./components/views/Articles/Articles.view";

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
