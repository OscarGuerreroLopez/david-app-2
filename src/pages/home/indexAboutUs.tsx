import React from "react";
import { Flex, Text, Card, Image, Box } from "rebass";

import { CustomCard } from "../../components/customCard";

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
      <Box width={1} px={0}>
        <CustomCard>
          <Text fontSize={[3, 4, 5]} fontWeight="bold" textAlign="center">
            Quienes somos:
          </Text>
          <Text p={1} fontSize={[2, 3, 5]}>
            Con más de 30 años a su servicio, DROS es una empresa consolidada,
            compuesta por un equipo de profesionales competentes con una amplia
            experiencia personal en el mundo del automatismo, dando tambien
            servicios de Cerrajeria Rápida a comunidades, empresas y
            particulares.
          </Text>

          <Flex>
            <Card width={[256, 320]} mx="auto">
              <Image src={team} />
            </Card>
          </Flex>

          <Text
            fontSize={[3, 4, 4]}
            fontWeight="bold"
            style={{ cursor: "pointer", color: "#3383FF" }}
            onClick={onClick}
          >
            Mas sobre nosotros...
          </Text>
        </CustomCard>
      </Box>
    </Flex>
  );
};
