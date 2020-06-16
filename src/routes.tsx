import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const User = lazy(() => import("./components/User"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:username" component={User} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
