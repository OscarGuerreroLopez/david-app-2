import React, { useEffect } from "react";
import { Flex, Image, Text } from "rebass";

import garage from "./images/garage_door_small.jpg";
import garage_door_1 from "./images/garage_door_1.jpg";
import automatismo1 from "./images/automatismos1.jpg";
import automatismo2 from "./images/automatismos2.jpg";
import automatismo3 from "./images/automatismos3.jpeg";
import automatismo4 from "./images/automatismos4.jpg";
import automatismo5 from "./images/automatismos5.jpg";
import locksmith1 from "./images/locksmith1.jpg";
import locksmith2 from "./images/locksmith2.jpg";
import locksmith3 from "./images/locksmith3.jpeg";
import locksmith4 from "./images/locksmith4.jpeg";

import lock_1 from "./images/lock_1.jpg";
import { CustomCard } from "../../components/customCard";
import { MetaTags } from "../../components/metaTags";
interface IProps {}
interface ItemProps {
  imageName: string;
}

const Item: React.FC<ItemProps> = ({ imageName }): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <MetaTags />
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
          <Item imageName={automatismo1} />
          <Item imageName={automatismo2} />
          <Item imageName={automatismo3} />
          <Item imageName={automatismo4} />
          <Item imageName={automatismo5} />
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
          <Item imageName={locksmith1} />
          {/* <Item imageName={locksmith2} /> */}
          <Item imageName={locksmith3} />
          <Item imageName={locksmith4} />
        </Flex>
      </Flex>
    </>
  );
};

export default Gallery;
