import React from "react";
import { Flex, Text, Image, Link } from "rebass";
import { useThemeUI } from "theme-ui";
// import logoDark from "./images/logoDark.png";
import logo from "./images/logoDark.png";
// import logoLight from "./images/logoLight.png";
// import { CustomCard } from "../../components/customCard";

interface IProps {
  town: string;
}

export const Banner: React.FC<IProps> = ({ town }) => {
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          "@media screen and (max-width: 1023px)": {
            display: "none",
          },
          color: (theme) => `${colorMode === "default" ? null : "#3383FF"}`,
          // color: "#3383FF",
          width: ["100%"],
          fontWeight: "bold",
        }}
      >
        {town && (
          <>
            <Flex flexWrap="wrap" width={["100%"]} justifyContent="center">
              <Text
                sx={{
                  fontSize: [2, 4, 4, 5, 5],
                  textAlign: "center",
                  width: ["100%"],
                  //   color: "#F99173",
                }}
              >
                Prestamos servicio en {town} y alrededores
              </Text>
            </Flex>
          </>
        )}
        <Image
          // src={colorMode === "default" ? logoLight : logoDark}
          src={logo}
          sx={{
            borderRadius: 8,
          }}
          alt="Puertas automáticas de garaje Dros"
        />
      </Flex>
      <Flex
        justifyContent="center"
        sx={{
          "@media screen and (max-width: 1023px)": {
            display: "none",
          },
          // color: (theme) => `${colorMode === "default" ? null : "#3383FF"}`,
          color: "#3383FF",
        }}
      >
        <Text
          sx={{
            fontSize: [2, 4, 4, 5, 6],
            fontWeight: "bold",
          }}
        >
          <Link
            href="tel:695-99-59-69"
            sx={{ textDecoration: "none", color: "primary " }}
          >
            Telf: 695 995 969
          </Link>
        </Text>
      </Flex>
    </>
  );
};
