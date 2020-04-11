import { createContext, Dispatch, SetStateAction } from "react";

export interface ILocation {
  path: string;
  town: string;
}
export interface ILocationProvider {
  location: ILocation;
  setLocation: Dispatch<SetStateAction<ILocation>>;
}

export const initialLocation: ILocation = {
  path: "",
  town: "",
};

export const LocationContext = createContext<ILocationProvider>({
  location: initialLocation,
  setLocation: () => {},
});
