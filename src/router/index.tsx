import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loader } from "../components/loader";
import Nav from "../pages/nav";
import Footer from "../components/footer";
import { MobileTitle } from "../components/mobileTitle";
import { routes } from "../constants";
import { CookieWarn } from "../components/cookieWarn";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Services = lazy(() => import("../pages/services"));
const Contact = lazy(() => import("../pages/contact"));
const Gallery = lazy(() => import("../pages/gallery"));
const Privacy = lazy(() => import("../pages/privacy"));

const Router = () => {
  const municipiosEste = Object.keys(routes.MunicipiosEste);
  const municipiosNordEste = Object.keys(routes.MunicipiosNordEste);
  const municipiosNorte = Object.keys(routes.MunicipiosNorte);
  const municipiosOeste = Object.keys(routes.MunicipiosOeste);
  const municipiosSierraCentral = Object.keys(routes.MunicipiosSierraCentral);
  const municipiosSudeste = Object.keys(routes.MunicipiosSudeste);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Nav />
        <MobileTitle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path={municipiosEste} exact component={Home} />
          <Route path={municipiosNordEste} exact component={Home} />
          <Route path={municipiosNorte} exact component={Home} />
          <Route path={municipiosOeste} exact component={Home} />
          <Route path={municipiosSierraCentral} exact component={Home} />
          <Route path={municipiosSudeste} exact component={Home} />

          <Route component={Home} />
        </Switch>
        <CookieWarn />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
