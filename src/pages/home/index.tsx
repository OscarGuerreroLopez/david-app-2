import React from "react";
import { Flex, Image, Card } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

// import { useThemeUI } from "theme-ui";

import { IndexAboutUs } from "./indexAboutUs";
import { IndexServices } from "./indexServices";
import { IndexBrands } from "./brandsIntro";
import { ContactMini } from "./contactMini";
import garage from "./images/garage_door.jpg";
import rapeco from "./images/rapeco.png";
import allBrands from "./images/allBrands.png";

interface IProps extends RouteComponentProps {}

const Home = withRouter(
  (props: IProps): JSX.Element => {
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

    const clickedMiniContact = () => {
      console.log("clickedMiniContact");
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
          <Image
            src={garage}
            sx={{
              width: ["100%"],
              height: ["100%"],
              filter: "grayscale(100%)"
            }}
          />
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
          flexWrap="wrap"
          sx={{
            px: [0, 0, 0, 0, 40, 70, 80],
            pt: 4
          }}
        >
          {/* <Flex flexWrap="wrap" alignItems="flex-start" width="100%"> */}
          <Card
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              textAlign: "center"
            }}
          >
            <Image src={rapeco} />
          </Card>
          <Card
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              textAlign: "center"
            }}
          >
            <Image src={allBrands} />
          </Card>
          {/* </Flex> */}
        </Flex>

        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 40, 70, 80],
            pt: 4,
            maxHeight: "200px"
          }}
        >
          <Flex flexWrap="wrap" alignItems="flex-start" width="100%">
            <Flex
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
                pr: ["0", "0", "0", "0", "0", "4", "4"]
              }}
            >
              <IndexBrands onClick={clickedIndexBrands} />
            </Flex>

            <Flex
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
                pl: ["0", "0", "0", "0", "0", "4", "4"]
              }}
            >
              <ContactMini onClick={clickedMiniContact} />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }
);

export default Home;
