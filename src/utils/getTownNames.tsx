import { routes } from "../constants";

export const GetTownNames = async () => {
  const municipios = Object.keys(routes);

  const areas: IObjectLiteral2 = routes;

  let joder: IObjectLiteral2[];

  const towns = municipios.map((area: any) => {
    return areas[area];
  });

  try {
    joder = await stripTown(towns);
    console.log("11111", joder);

    return joder;
  } catch (error) {
    console.log("error", error);
  }
};

const stripTown = (towns: any[]): Promise<any> => {
  let allTowns: any[];

  return new Promise((resolve) => {
    towns.forEach((town: any, index: number) => {
      console.log("2222", town);
      Object.keys(town).forEach((name: string, index: number) => {
        console.log("3333", name, town[name]);
        allTowns = { ...allTowns, ...town };
      });
    });
    console.log("44444", allTowns);
    console.log("55555", Object.keys(allTowns).length);

    resolve(allTowns);
  });
};
