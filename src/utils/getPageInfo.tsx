import { routes } from "../constants";

export const GetPageInfo = (route: string): string => {
  if (routes.MunicipiosEste[route]) {
    return routes.MunicipiosEste[route];
  }

  if (routes.MunicipiosNordEste[route]) {
    return routes.MunicipiosNordEste[route];
  }

  return "";
};
