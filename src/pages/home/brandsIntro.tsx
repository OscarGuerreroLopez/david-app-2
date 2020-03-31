import React from "react";
import { Flex, Box, Text, Image } from "rebass";

import { CustomCard } from "../../components/customCard";

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

export const IndexBrands: React.FC<IProps> = props => {
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
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={vds}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={erreka}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={bft}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
          </Flex>
          <Flex>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={gibidi}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={nice}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={came}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
          </Flex>
          <Flex>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={marantec}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={pujol}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
            <Box p={3} width={1} sx={{ textAlign: "center" }}>
              <Image
                src={clemsa}
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: 9
                }}
              />
            </Box>
          </Flex>
        </CustomCard>
      </Box>
    </Flex>
  );
};
