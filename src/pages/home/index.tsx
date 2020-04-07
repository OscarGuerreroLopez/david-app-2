import React from "react";
import { Flex, Image, Card } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

// import { useThemeUI } from "theme-ui";

import { IndexAboutUs } from "./indexAboutUs";
import { IndexServices } from "./indexServices";
import { IndexBrands } from "./brandsIntro";
import { ContactMini } from "./contactMini";
import { MobileBanner } from "./mobileBanner";

import garage from "./images/garage_door_med.jpg";
import rapeco from "./images/rapeco.png";
import allBrands from "./images/allBrands.png";

interface IProps extends RouteComponentProps {}

const Home = withRouter(
  ({ history, ...props }: IProps): JSX.Element => {
    // const context = useThemeUI();
    // const { colorMode } = context;

    const clickedIndexService = () => {
      history.push("/services");
    };

    const clickedIndexAbout = () => {
      history.push("/about");
    };

    const clickedMiniContact = () => {
      history.push("/contact");
    };

    return (
      <>
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 170, 180],
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
        </Flex>
        <br />
        <MobileBanner />
        <br />
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 170, 180],
          }}
        >
          <IndexAboutUs onClick={clickedIndexAbout} />
        </Flex>
        <br />
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 170, 180],
          }}
        >
          <IndexServices onClick={clickedIndexService} />
        </Flex>
        <Flex
          flexWrap="wrap"
          sx={{
            px: [0, 0, 0, 0, 0, 170, 180],
            pt: 4,
          }}
        >
          <Card
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              textAlign: "center",
            }}
          >
            <Image src={rapeco} alt="Automatismos Dros" />
          </Card>
          <Card
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              textAlign: "center",
            }}
          >
            <Image src={allBrands} alt="Automatismos Dros" />
          </Card>{" "}
        </Flex>
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 170, 180],
            pt: 4,
          }}
        >
          <Flex flexWrap="wrap">
            <Flex
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
                pr: ["0", "0", "0", "0", "0", "4", "4"],
                height: [null, null, null, null, null, "100%", "100%"],
              }}
            >
              <IndexBrands />
            </Flex>

            <Flex
              sx={{
                width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
                pl: ["0", "0", "0", "0", "0", "4", "4"],
                height: [null, null, null, null, null, "100%", "100%"],
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
