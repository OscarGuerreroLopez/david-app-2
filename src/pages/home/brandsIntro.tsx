import React from "react";
import { Flex, Box, Text } from "rebass";

import { CustomCard } from "../../components/customCard";
import { LittleImage } from "../../components/littleImage";

import vds from "./images/vds.jpeg";
import erreka from "./images/erreka.png";
import bft from "./images/bft.jpeg";
import gibidi from "./images/gibidi.jpg";
import nice from "./images/nice.png";
import came from "./images/came.png";
import marantec from "./images/marantec.jpg";
import pujol from "./images/pujol.png";
import clemsa from "./images/clemsa.png";

interface IProps {
  onClick: () => void;
}

export const IndexBrands: React.FC<IProps> = (props) => {
  return (
    <Flex mx={0}>
      <Box width={1} px={0}>
        <CustomCard>
          <Text fontSize={[3, 4, 5]} fontWeight="bold" textAlign="center">
            Trabajamos todas las marcas
          </Text>
          <Text p={1} fontSize={[2, 3, 5]}>
            Tanto nacionales como de importacion, algunas de las mas destacadas
            que trabajamos:
          </Text>
          <Flex>
            <LittleImage picture={vds} />
            <LittleImage picture={erreka} />
            <LittleImage picture={bft} />
          </Flex>
          <Flex>
            <LittleImage picture={gibidi} />
            <LittleImage picture={nice} />
            <LittleImage picture={came} />
          </Flex>
          <Flex>
            <LittleImage picture={marantec} />
            <LittleImage picture={pujol} />
            <LittleImage picture={clemsa} />
          </Flex>
        </CustomCard>
      </Box>
    </Flex>
  );
};
