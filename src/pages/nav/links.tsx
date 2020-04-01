import React from "react";
import { Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  links: string[];
}
export const Links: React.FC<IProps> = ({ links }): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  return (
    <>
      <Flex
        sx={{
          height: ["100%"],
          cursor: "pointer",

          "@media screen and (max-width: 1023px)": {
            display: "none"
          }
        }}
      >
        {links.map((link: string) => {
          const index = uuidv4();
          return (
            <Text
              sx={{
                px: 2,
                py: [1, 1, 1, 1, 1, 4, 4],
                fontSize: [4, 4, 4, 4, 4, 4, 5]
              }}
              key={index}
            >
              {link}
            </Text>
          );
        })}
        <Text
          sx={{
            px: 2,
            py: [1, 1, 1, 1, 1, 4, 4],
            fontSize: [4, 4, 4, 4, 4, 4, 5]
          }}
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          Modo {colorMode === "default" ? "Oscuro" : "Claro"}
        </Text>
      </Flex>
    </>
  );
};
