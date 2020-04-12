import React, { useEffect, useContext } from "react";
import { Flex, Image, Card } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet";

// import { useThemeUI } from "theme-ui";

import { IndexAboutUs } from "./indexAboutUs";
import { IndexServices } from "./indexServices";
import { IndexBrands } from "./brandsIntro";
import { ContactMini } from "./contactMini";
import { MobileBanner } from "./mobileBanner";
import { GetPageInfo } from "../../utils/getPageInfo";
import { LocationContext } from "../../utils/locationContext";

import garage from "./images/garage_door_med.jpg";
// import rapeco from "./images/rapeco.png";
import budget from "./images/budget.png";
import allBrands from "./images/allBrands.png";

interface IProps extends RouteComponentProps {}

const Home = withRouter(
  ({ history, match, ...props }: IProps): JSX.Element => {
    // const context = useThemeUI();
    // const { colorMode } = context;

    const { location, setLocation } = useContext(LocationContext);

    useEffect(() => {
      window.scrollTo(0, 0);
      const path = match.path;
      const town = GetPageInfo(match.path);

      setLocation({ path, town });
    }, [match.path, setLocation]);

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
        <Helmet>
          <title>
            Automatismos y cerrajeria en {location.town || "Madrid"}
          </title>
          <meta
            name="description"
            content={`Automatismos y Cerrajería en ${
              location.town || "Madrid"
            }. Telf: 606 33 32 72. Reparación puerta garage. Cerrajero urgente. Arreglo puerta corredera. Puertas automáticas.`}
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 120, 180],
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

        <MobileBanner town={location.town} />
        <br />
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 120, 180],
          }}
        >
          <IndexServices onClick={clickedIndexService} town={location.town} />
        </Flex>
        <br />
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 120, 180],
          }}
        >
          <IndexAboutUs onClick={clickedIndexAbout} town={location.town} />
        </Flex>
        <Flex
          flexWrap="wrap"
          sx={{
            px: [0, 0, 0, 0, 0, 120, 180],
            pt: 4,
            mr: [4, 4, 4, 4, 4, 0, 0],
            ml: [4, 4, 4, 4, 4, 0, 0],
          }}
        >
          <Card
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              textAlign: "center",
            }}
          >
            <Image src={budget} alt="Automatismos Dros" />
          </Card>
          <Card
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
              textAlign: "center",
              pt: 2,
            }}
          >
            <Image src={allBrands} alt="Automatismos Dros" />
          </Card>{" "}
        </Flex>
        <Flex
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 120, 180],
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
