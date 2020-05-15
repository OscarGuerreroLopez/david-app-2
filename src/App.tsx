import React, { useMemo, useState } from "react";
import ReactGA from "react-ga";

import { ThemeProvider } from "theme-ui";
import { CookiesProvider } from "react-cookie";

import { theme } from "./styles";
import {
  LocationContext,
  initialLocation,
  ILocation,
  ILocationProvider,
} from "./utils/locationContext";

import Router from "./router";

function App() {
  const [location, setLocation] = useState<ILocation>(initialLocation);

  ReactGA.initialize("UA-166613782-1");

  const providerLocationValue: ILocationProvider = useMemo(
    () => ({ location, setLocation }),
    [location, setLocation]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContext.Provider value={providerLocationValue}>
          <CookiesProvider>
            <Router />
          </CookiesProvider>
        </LocationContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
