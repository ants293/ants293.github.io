import React, { ReactElement } from "react";
import "./App.scss";
import Router from "./router/router";

export default function App(): ReactElement {
  return (
    <div className="App">
      <Router />
    </div>
  );
}
