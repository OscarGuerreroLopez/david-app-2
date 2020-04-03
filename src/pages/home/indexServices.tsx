import React from "react";
import { Flex, Box, Text, Card, Image } from "rebass";

import home from "./images/undraw_coming_home_52ir.svg";
import { CustomCard } from "../../components/customCard";

interface IProps {
  onClick: () => void;
}

export const IndexServices: React.FC<IProps> = ({ onClick, ...props }) => {
  return (
    <Flex mx={0}>
      <Box width={1} px={0}>
        <CustomCard>
          <Text fontSize={[3, 4, 5]} fontWeight="bold" textAlign="center">
            Nuestros servicios:
          </Text>
          <Text p={1} fontSize={[2, 3, 5]}>
            En Dros estamos especializados en instalaciones y reparaciones de
            todo tipo cerrajeria y automatismos para puertas de garaje para
            clientes particulares, comunidades de vecinos y empresas.
          </Text>
          <Flex>
            <Card width={[256, 300, 320, 340, 360, 380, 400]} mx="auto">
              <Image src={home} alt="Automatismos Dros" />
            </Card>
          </Flex>
          <Text
            fontSize={[3, 4, 4]}
            fontWeight="bold"
            style={{ cursor: "pointer", color: "#3383FF" }}
            onClick={onClick}
            textAlign="right"
          >
            Mas sobre nuestros servicios...
          </Text>
        </CustomCard>
      </Box>
    </Flex>
  );
};
