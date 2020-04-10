import React from "react";
import { Flex, Image, Text } from "rebass";

import garage from "./images/garage_door_small.jpg";
import garage_door_1 from "./images/garage_door_1.jpg";
import lock_1 from "./images/lock_1.jpg";
import { CustomCard } from "../../components/customCard";
// import { Content } from "../../components/cardContent";

interface IProps {}
interface ItemProps {
  imageName: string;
}

const Item: React.FC<ItemProps> = ({ imageName }): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      width={["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"]}
      px={["0", "0", "0", "0", "0", "2", "2"]}
      py="2"
    >
      <CustomCard>
        <Image
          src={imageName}
          sx={{
            width: ["100%"],
            height: ["100%"],
          }}
          alt="Automatismos Dros"
        />
      </CustomCard>
    </Flex>
  );
};
const Gallery: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex
      justifyContent="flex-start"
      flexWrap="wrap"
      sx={{
        ml: ["auto"],
        px: [0, 0, 0, 0, 0, 70, 80],
      }}
    >
      <Image
        src={garage}
        sx={{
          width: ["100%"],
          height: ["100%"],
          filter: "grayscale(100%)",
        }}
        alt="Automatismos Dros"
      />

      <Flex flexWrap="wrap" pt="4" width="100%" justifyContent="center">
        <Text
          fontSize={[3, 3, 4, 4, 4, 5, 5]}
          fontWeight="bold"
          textAlign="center"
          width="100%"
        >
          Automatismos:
        </Text>
        <Item imageName={garage_door_1} />
        <Item imageName={garage_door_1} />
        <Item imageName={garage_door_1} />
        <Item imageName={garage_door_1} />
        <Item imageName={garage_door_1} />
        <Item imageName={garage_door_1} />
      </Flex>

      <Flex flexWrap="wrap" pt="4" width="100%" justifyContent="center">
        <Text
          fontSize={[3, 3, 4, 4, 4, 5, 5]}
          fontWeight="bold"
          textAlign="center"
          width="100%"
        >
          Cerrajeria:
        </Text>
        <Item imageName={lock_1} />
        <Item imageName={lock_1} />
        <Item imageName={lock_1} />
        <Item imageName={lock_1} />
      </Flex>
    </Flex>
  );
};

export default Gallery;
