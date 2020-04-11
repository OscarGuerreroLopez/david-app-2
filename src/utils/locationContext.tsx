import { createContext } from "react";

export interface ILocation {
  location: {
    path: string;
    townName: string;
  };
}

export const InitialLocation: ILocation = {
  location: {
    path: "",
    townName: "",
  },
};

export const LocationContext = createContext<ILocation>(InitialLocation);
