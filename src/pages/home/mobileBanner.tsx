import React from "react";
import { Flex, Text, Image } from "rebass";
import { useThemeUI } from "theme-ui";
import logoDark from "./images/logoDark.png";
import logoLight from "./images/logoLight.png";
import { CustomCard } from "../../components/customCard";

interface IProps {}

export const MobileBanner: React.FC<IProps> = () => {
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <>
      <CustomCard>
        <Flex
          justifyContent="center"
          sx={{
            "@media screen and (min-width: 1023px)": {
              display: "none",
            },
            color: (theme) => `${colorMode === "default" ? null : "#3383FF"}`,
          }}
        >
          <Image
            // src={colorMode === "default" ? logoLight : logoDark}
            src={logoDark}
            sx={{
              width: ["100%", "50%"],
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
      </CustomCard>
    </>
  );
};
