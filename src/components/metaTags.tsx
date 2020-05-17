import React, { useContext } from "react";

import { Helmet } from "react-helmet";

import { LocationContext } from "../utils/locationContext";

interface IProps {}

export const MetaTags: React.FC<IProps> = (): JSX.Element => {
  const { location } = useContext(LocationContext);

  return (
    <Helmet>
      <title>Automatismos en {location.town || "Madrid"}</title>
      <meta
        name="description"
        content={`Automatismos y Cerrajería en ${
          location.town || "Madrid"
        }. Telf: 606 33 32 72. Reparación puerta garage. Automatismos. Arreglo puerta corredera. Puertas automáticas.`}
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://automatismosdros.com/" />
    </Helmet>
  );
};
