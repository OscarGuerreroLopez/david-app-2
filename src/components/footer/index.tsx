import React from "react";

import { withRouter, RouteComponentProps } from "react-router-dom";
import { Flex, Text, Image } from "rebass";
// import { useThemeUI } from "theme-ui";

import arrowUp from "../images/arrowUp.svg";

interface IProps extends RouteComponentProps {}

const Footer = withRouter(
  ({ history, ...props }: IProps): JSX.Element => {
    // const context = useThemeUI();
    // const { colorMode } = context;

    return (
      <>
        <Flex
          //   color={colorMode === "default" ? null : "#EEEEEC"}
          flexWrap="wrap"
        >
          {/* <Text p={2} fontWeight="bold">
          Rebass
        </Text>
        <Box mx="auto" />
        <Link>Profile</Link> */}
          <Flex
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "33%", "33%"],
              fontFamily: "chewy",
              justifyContent: "center",
            }}
          >
            <Text>HOla</Text>
          </Flex>
          <Flex
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "33%", "33%"],

              justifyContent: "center",
            }}
          >
            <Image
              src={arrowUp}
              sx={{
                width: 58,
                height: 48,
                borderRadius: 9999,
              }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            />
          </Flex>
          <Flex
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "33%", "33%"],
              fontFamily: "chewy",
              justifyContent: "center",
            }}
          >
            <Text>HOla</Text>
          </Flex>
        </Flex>
      </>
    );
  }
);

export default Footer;
