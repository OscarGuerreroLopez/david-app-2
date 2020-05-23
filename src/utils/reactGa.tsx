import ReactGA from "react-ga";

ReactGA.initialize("UA-166613782-1");

export const ReactGa = (path: string): void => {
  ReactGA.pageview(path);
};
