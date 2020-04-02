import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loader from "../components/loader";
import Nav from "../pages/nav";
import About from "../pages/about";

const Home = lazy(() => import("../pages/home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
