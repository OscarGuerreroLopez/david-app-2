import React, {
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
  createContext,
} from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";
// import {
//   LocationContext,
//   InitialLocation,
//   ILocation,
// } from "./utils/locationContext";

import Router from "./router";

interface ILocation {
  path: string;
  town: string;
}
interface ILocation2 {
  location: ILocation;
  setLocation: Dispatch<SetStateAction<ILocation>>;
}

const initialLocation = {
  path: "",
  town: "",
};

export const LocationContext = createContext<ILocation2>({
  location: initialLocation,
  setLocation: () => {},
});
function App() {
  const [location, setLocation] = useState<ILocation>(initialLocation);

  const providerLocationValue: ILocation2 = useMemo(
    () => ({ location, setLocation }),
    [location, setLocation]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContext.Provider value={providerLocationValue}>
          <Router />
        </LocationContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
