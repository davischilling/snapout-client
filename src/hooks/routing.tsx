import React from "react";
import { Switch, Route } from "react-router-dom";

export const RoutingHook = ({ routes }: any) =>
<Switch>
  {
    routes.map(({ id, link, component, exact }: any) => {
      return exact ? (
        <Route key={id} path={link} exact>
          {component}
        </Route>
      ) : (
        <Route key={id} path={link}>
          {component}
        </Route>
      )
    })
  }
</Switch>