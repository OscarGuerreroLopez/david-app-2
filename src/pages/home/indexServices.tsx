import React from "react";
import { Flex, Text, Card, Image } from "rebass";

import home from "./images/undraw_coming_home_52ir.svg";
import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";

interface IProps {
  onClick: () => void;
  town: string;
}

export const IndexServices: React.FC<IProps> = ({ onClick, town }) => {
  const extraText = town ? `en ${town} y alrededores` : "";
  return (
    <Flex mx={0} width={["100%"]}>
      <CustomCard width={["100%"]}>
        <Content
          title={"Nuestros servicios"}
          content={`En Dros estamos especializados en instalaciones y reparaciones de \
              todo tipo cerrajeria y automatismos para \
               clientes particulares, comunidades de vecinos y empresas ${extraText}\
            `}
        />
        <Content
          content={`Arreglo e instalación de motores para puertas de garaje, tanto
          correderas como secciónales, abatibles y batientes.\
          Cambios de bombillo, aperturas de urgencia, arreglo de puertas individuales y cierres metalicos de negocio....
            `}
        />

        <Text fontSize={[2, 2, 3, 4, 5]} fontWeight="bold" textAlign="center">
          Presupuestos sin compromiso
        </Text>

        <Flex>
          <Card width={[256, 300, 320, 340, 360, 380, 400]} mx="auto">
            <Image src={home} alt="Automatismos Dros" />
          </Card>
        </Flex>
        <Text
          fontSize={[2, 2, 3, 4, 5]}
          fontWeight="bold"
          style={{ cursor: "pointer", color: "#3383FF" }}
          onClick={onClick}
          textAlign="right"
        >
          Mas sobre nuestros servicios...
        </Text>
      </CustomCard>
    </Flex>
  );
};
