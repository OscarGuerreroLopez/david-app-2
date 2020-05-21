import { routes } from "../constants";

export const GetTownNames = async () => {
  const municipios = Object.keys(routes);

  const areas: IObjectLiteral2 = routes;

  let locationInfo: IObjectLiteral2[];

  const towns = municipios.map((area: any) => {
    return areas[area];
  });

  try {
    locationInfo = await stripTown(towns);

    console.log("@@@@@", locationInfo);

    return locationInfo;
  } catch (error) {
    console.log("error", error);
  }
};

const stripTown = (towns: any[]): Promise<any> => {
  let allTowns: any[];

  return new Promise((resolve) => {
    towns.forEach((town: any, index: number) => {
      Object.keys(town).forEach((name: string, index: number) => {
        allTowns = {
          ...allTowns,
          ...{ [`${name}`]: `Automatismos en ${town[name]}` },
        };
      });
    });

    resolve(allTowns);
  });
};
