import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { ReactElement } from "react";
import { routeMap } from "./routeMap";

export default function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        {routeMap.map((routeItem) => (
          <Route path={routeItem.path} component={routeItem.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
