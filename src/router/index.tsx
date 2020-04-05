import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loader } from "../components/loader";
import Nav from "../pages/nav";
import Footer from "../components/footer";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Services = lazy(() => import("../pages/services"));
const Contact = lazy(() => import("../pages/contact"));
const Gallery = lazy(() => import("../pages/gallery"));
const Privacy = lazy(() => import("../pages/privacy"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacy" exact component={Privacy} />
        </Switch>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
