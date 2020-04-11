import React from "react";
import { Flex, Text, Image } from "rebass";
import { useThemeUI } from "theme-ui";
import logoDark from "./images/logoDark.png";
// import logoLight from "./images/logoLight.png";
// import { CustomCard } from "../../components/customCard";

interface IProps {
  town: string;
}

export const MobileBanner: React.FC<IProps> = ({ town }) => {
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          "@media screen and (min-width: 1023px)": {
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
                  fontSize: [2, 3, 4, 4, 5],
                  textAlign: "center",
                  width: ["100%"],
                }}
              >
                Automatismos y cerrajeria en:
              </Text>
              <Text
                sx={{
                  fontSize: [2, 4, 4, 5, 5],
                  textAlign: "center",
                  width: ["100%"],
                }}
              >
                {town}
              </Text>
            </Flex>
          </>
        )}
        <Image
          // src={colorMode === "default" ? logoLight : logoDark}
          src={logoDark}
          sx={{
            borderRadius: 8,
          }}
          alt="Automatismos y cerrajeria Dros"
        />
      </Flex>
      <Flex
        justifyContent="center"
        sx={{
          "@media screen and (min-width: 1023px)": {
            display: "none",
          },
          // color: (theme) => `${colorMode === "default" ? null : "#3383FF"}`,
          color: "#3383FF",
        }}
      >
        <Text
          sx={{
            fontSize: [2, 4, 4, 5, 6],
          }}
        >
          Telf: 622 999 888
        </Text>
      </Flex>
    </>
  );
};
