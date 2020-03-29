import React from "react";
import { Text, Flex, Box, Heading, Button, Image } from "rebass";

import garage from "./images/garage_door.jpg";

interface IProps {}

const Home: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex
      justifyContent="flex-start"
      sx={{
        ml: ["auto"],
        px: [0, 0, 0, 0, 40, 70, 80],
        bg: "orange"
      }}
    >
      <Flex
        sx={{
          bg: "blue"
        }}
      >
        <Image
          src={garage}
          sx={{
            width: ["100%"],
            height: ["100%"],
            filter: "grayscale(100%)"
          }}
        />
        <Text
          sx={{
            position: "absolute",
            px: ["60%", "60%", "60%", "60%", "60%", "60%", "60%"],
            py: ["15%", "15%", "15%", "15%", "15%", "15%", "15%"],
            fontSize: [1, 1, 2, 2, 3, 5, 6]
          }}
        >
          Calidad y precio granatizados
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
