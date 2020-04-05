import React from "react";

import { withRouter, RouteComponentProps } from "react-router-dom";
import { Flex, Text, Image, Box } from "rebass";
// import { useThemeUI } from "theme-ui";

import arrowUp from "../images/arrowUp.svg";

interface IProps {}

interface ILink extends RouteComponentProps {
  text: string;
  link: string;
}

const Link = withRouter(({ text, link, history }: ILink) => {
  return (
    <Flex
      width="100%"
      sx={{
        justifyContent: "center",
        mt: [2, 3, 3, 3, 3, 3, 3],
        fontFamily: "chewy",
        cursor: "pointer",
        fontSize: [3, 4, 4, 5, 5, 5, 5],
      }}
      onClick={() => {
        history.push(link);
      }}
    >
      <Text>{text}</Text>
    </Flex>
  );
});

const Footer: React.FC<IProps> = (): JSX.Element => {
  // const context = useThemeUI();
  // const { colorMode } = context;

  return (
    <>
      <Flex
        //   color={colorMode === "default" ? null : "#EEEEEC"}
        flexWrap="wrap"
        sx={{ mt: [4, 4, 4, 4, 4, 4, 4] }}
      >
        <Flex
          flexWrap="wrap"
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"],
          }}
        >
          <Link text={"Quienes somos"} link={"/about"} />
          <Link text={"Nuestros Servicios"} link={"/services"} />
          <Link text={"Contacto"} link={"/contact"} />
          <Link text={"Politica de privacidad"} link={"/privacy"} />
        </Flex>

        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"],
            // mt: [2, 2, 2, 2, 2, 1, 1],
            justifyContent: "center",
          }}
        >
          <Image
            src={arrowUp}
            sx={{
              width: 58,
              height: 48,
              borderRadius: 9999,
              display: [
                "none",
                "none",
                "none",
                "none",
                "none",
                "inline",
                "inline",
              ],
            }}
            onClick={() => {
              try {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              } catch (error) {
                // just a fallback for older browsers
                window.scrollTo(0, 0);
              }
            }}
          />
        </Flex>

        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"],
            fontFamily: "Cambay",
            p: 4,
          }}
        >
          <Box fontSize={[3, 3, 3, 3, 3, 2, 2]} width={[1]}>
            <Flex width={[1]} justifyContent="center">
              <Text>Automatismos y cerrajeria Dros</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Automatismos</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Cerrajeria</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Aperturas</Text>
            </Flex>
            <Flex width={[1]} justifyContent="center">
              <Text>Puertas de garaje</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: ["100%", "100%", "100%", "100%", "100%", "33%", "33%"],
          mt: [2, 2, 2, 2, 2, 1, 1],
          justifyContent: "center",
        }}
      >
        <Image
          src={arrowUp}
          sx={{
            width: 58,
            height: 48,
            borderRadius: 9999,
            display: [
              "inline",
              "inline",
              "inline",
              "inline",
              "inline",
              "none",
              "none",
            ],
          }}
          onClick={() => {
            try {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            } catch (error) {
              // just a fallback for older browsers
              window.scrollTo(0, 0);
            }
          }}
        />
      </Flex>
    </>
  );
};

export default Footer;
