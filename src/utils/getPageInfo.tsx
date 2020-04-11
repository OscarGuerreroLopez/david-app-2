import { routes } from "../constants";

export const GetPageInfo = (route: string): string => {
  console.log("XXXXX", route);

  if (routes.MunicipiosEste[route]) {
    return routes.MunicipiosEste[route];
  }

  if (routes.MunicipiosNordEste[route]) {
    return routes.MunicipiosNordEste[route];
  }

  return "";
};
