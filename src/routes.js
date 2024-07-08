import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./screens/Login";
import Principal from "./screens/Principal";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/principal" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}