import React, { useEffect, useContext } from "react";
import { Flex, Image, Card, Box, Text } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useThemeUI } from "theme-ui";

import { MetaTags } from "../../components/metaTags";
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
    const context = useThemeUI();
    const { colorMode } = context;

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
        <MetaTags />
        <Flex
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{
            ml: ["auto"],
            px: [0, 0, 0, 0, 0, 120, 180],
          }}
        >
          <Box
            sx={{
              width: ["100%"],
              // maxHeight: "400px",
              minHeight: [
                "100px",
                "180px",
                "200px",
                "290px",
                "420px",
                "450px",
                "680px",
                "950px",
              ],
              backgroundImage: [`url(${garage})`],
              backgroundSize: "cover",
              justifyContent: "center",
              alignContent: "center",
              filter: (theme) =>
                `${
                  colorMode === "default" ? "grayscale(0%)" : "grayscale(100%)"
                }`,
              // filter: "grayscale(100%)",
            }}
          >
            <Flex
              sx={{
                display: [
                  "none",
                  "none",
                  "none",
                  "none",
                  "inline",
                  "inline",
                  "inline",
                  "inline",
                ],
              }}
            >
              <Text
                sx={{
                  mt: "10px",
                  position: "relative",
                  fontSize: [1, 2, 2, 2, 5, 6, 7, 8],
                  fontWeight: "bold",
                  color: "#360FF9",
                  textAlign: "center",
                }}
              >
                Rapidez y seriedad garantizadas
              </Text>
              <Text
                sx={{
                  position: "relative",
                  fontSize: [1, 2, 2, 2, 4, 5, 6, 7],
                  fontWeight: "bold",
                  color: "#360FF9",
                  textAlign: "center",
                }}
              >
                Telf: 606 33 32 72
              </Text>
            </Flex>
            <Flex
              sx={{
                display: [
                  "none",
                  "inline",
                  "inline",
                  "inline",
                  "none",
                  "none",
                  "none",
                  "none",
                ],
              }}
            >
              <Text
                sx={{
                  mt: "15px",
                  position: "relative",
                  fontSize: [2, 4, 4, 5],
                  fontWeight: "bold",
                  color: "#360FF9",
                  textAlign: "center",
                }}
              >
                Telf: 606 33 32 72
              </Text>
            </Flex>
            {/* <Image
              src={banner}
              sx={{
                top: ["10%", "10%", "1%", "3%", "3%", "5%", "5%", "35%"],
                left: ["10%", "10%", "1%", "3%", "3%", "5%", "5%", "25%"],
                position: "relative",
                height: [
                  "30%",
                  "30%",
                  "30%",
                  "30%",
                  "30%",
                  "30%",
                  "30%",
                  "30%",
                ],
              }}
              alt="Automatismos Dros"
            /> */}
          </Box>
        </Flex>
        <br />

        <MobileBanner town={location.town} />
        {/* <Banner town={location.town} /> */}
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
