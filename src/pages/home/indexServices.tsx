import React from "react";
import { Flex, Box, Text, Card, Image } from "rebass";

import home from "./images/undraw_coming_home_52ir.svg";
import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";

interface IProps {
  onClick: () => void;
}

export const IndexServices: React.FC<IProps> = ({ onClick, ...props }) => {
  return (
    <Flex mx={0} width={["100%"]}>
      <CustomCard width={["100%"]}>
        <Content
          title={"Nuestros servicios"}
          content={
            "En Dros estamos especializados en instalaciones y reparaciones de \
              todo tipo cerrajeria y automatismos para puertas de garaje para \
               clientes particulares, comunidades de vecinos y empresas.\
            "
          }
        />

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
