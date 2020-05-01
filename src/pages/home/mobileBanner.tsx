import React from "react";
import { Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";
// import logoDark from "./images/logoDark.png";
// import logo from "./images/logoDark.png";
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
                  fontSize: [2, 4, 4, 5, 5],
                  textAlign: "center",
                  width: ["100%"],
                }}
              >
                En {town} y alrededores
              </Text>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};
