import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import ArticlesView from "./views/Articles/Articles.view";
import ArticleView from "./views/Articles/Article.view";


export default function App() {

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
