import React, { ReactElement } from "react";
import "./App.scss";
import RootRouter from "./router/router";

export default function App(): ReactElement {
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}
