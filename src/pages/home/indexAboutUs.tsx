import React from "react";
import { Flex, Text, Card, Image } from "rebass";

import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";

import team from "./images/team.svg";
interface IProps {
  onClick: () => void;
}

export const IndexAboutUs: React.FC<IProps> = ({
  onClick,
  ...props
}): JSX.Element => {
  return (
    <Flex mx={0}>
      <CustomCard>
        <Content
          title={"Quienes somos"}
          content={
            "Con más de 30 años a su servicio, DROS es una empresa consolidada, compuesta por un equipo de profesionales competentes con una amplia experiencia personal en el mundo del automatismo, dando tambien servicios de Cerrajeria Rápida a comunidades, empresas y particulares."
          }
        />

        <Flex>
          <Card width={[256, 300, 320, 340, 360, 380, 400]} mx="auto">
            <Image src={team} alt="Automatismos Dros" />
          </Card>
        </Flex>

        <Text
          fontSize={[2, 2, 3, 4, 5]}
          fontWeight="bold"
          style={{ cursor: "pointer", color: "#3383FF" }}
          onClick={onClick}
        >
          Mas sobre nosotros...
        </Text>
      </CustomCard>
    </Flex>
  );
};
