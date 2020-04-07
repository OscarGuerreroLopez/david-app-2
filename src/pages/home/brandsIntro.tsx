import React from "react";
import { Flex, Box, Text } from "rebass";

import { CustomCard } from "../../components/customCard";
import { LittleImage } from "../../components/littleImage";
import { Content } from "../../components/cardContent";

import vds from "./images/vds.jpeg";
import erreka from "./images/erreka.png";
import bft from "./images/bft.jpeg";
import gibidi from "./images/gibidi.jpg";
import nice from "./images/nice.png";
import came from "./images/came.png";
import marantec from "./images/marantec.jpg";
import pujol from "./images/pujol.png";
import clemsa from "./images/clemsa.png";

interface IProps {}

export const IndexBrands: React.FC<IProps> = () => {
  return (
    <Flex mx={0}>
      <Box width={1} px={0}>
        <CustomCard>
          <Content
            title={"Trabajamos todas las marcas"}
            content={
              "Tanto nacionales como de importacion, algunas de las mas destacadas\
            que trabajamos:"
            }
          />

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
