import React from "react";
import { Route, Switch } from "react-router-dom";

// Configure routes
import Home from "./screens/home";
import Profile from "./screens/profile";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile/:ID" component={Profile} />
  </Switch>
);
