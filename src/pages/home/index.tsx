import React from "react";
import { Text, Flex, Image } from "rebass";
// import { useThemeUI } from "theme-ui";

import { IndexAboutUs } from "./indexAboutUs";
import { IndexServices } from "./indexServices";
import { IndexBrands } from "./brandsIntro";
import garage from "./images/garage_door.jpg";

interface IProps {}

const Home: React.FC<IProps> = (): JSX.Element => {
  // const context = useThemeUI();
  // const { colorMode } = context;

  const clickedIndexService = () => {
    console.log("clickedIndexService");
  };

  const clickedIndexAbout = () => {
    console.log("clickedIndexAbout");
  };

  const clickedIndexBrands = () => {
    console.log("clickedIndexBrands");
  };

  return (
    <>
      <Flex
        justifyContent="flex-start"
        sx={{
          ml: ["auto"],
          px: [0, 0, 0, 0, 40, 70, 80]
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
              fontSize: [1, 1, 2, 2, 3, 5, 6],
              color: "white"
            }}
          >
            Calidad y precio garantizados
          </Text>
        </Flex>
      </Flex>
      <br />

      <Flex
        justifyContent="flex-start"
        sx={{
          ml: ["auto"],
          px: [0, 0, 0, 0, 40, 70, 80]
        }}
      >
        <IndexAboutUs onClick={clickedIndexAbout} />
      </Flex>
      <br />
      <Flex
        justifyContent="flex-start"
        sx={{
          ml: ["auto"],
          px: [0, 0, 0, 0, 40, 70, 80]
        }}
      >
        <IndexServices onClick={clickedIndexService} />
      </Flex>

      <Flex
        justifyContent="flex-start"
        sx={{
          ml: ["auto"],
          px: [0, 0, 0, 0, 40, 70, 80]
        }}
      >
        <Flex flexWrap="wrap" alignItems="flex-end" width="100%">
          <Flex
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              pr: ["0", "0", "0", "0", "0", "4", "4"],
              pt: 4
            }}
          >
            <IndexBrands onClick={clickedIndexBrands} />
          </Flex>

          <Flex
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              pl: ["0", "0", "0", "0", "0", "4", "4"],
              pt: 4
            }}
          >
            <IndexBrands onClick={clickedIndexBrands} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
