import React from "react";
import { Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";
import { v4 as uuidv4 } from "uuid";

export interface IObjectLiteral {
  [key: string]: string;
}
interface IProps {
  linksObject: IObjectLiteral;
  onClick: (link: string) => void;
}
export const Links: React.FC<IProps> = ({
  linksObject,
  onClick,
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  const links = Object.keys(linksObject);

  return (
    <>
      <Flex
        sx={{
          height: ["100%"],
          cursor: "pointer",

          "@media screen and (max-width: 1023px)": {
            display: "none",
          },
          fontFamily: "chewy",
        }}
      >
        {links.map((link: string) => {
          const index = uuidv4();
          return (
            <Text
              sx={{
                px: 2,
                py: [1, 1, 1, 1, 1, 4, 4],
                fontSize: [4, 4, 4, 4, 4, 3, 4],
              }}
              key={index}
              onClick={() => {
                onClick(link);
              }}
            >
              {link}
            </Text>
          );
        })}
        <Text
          sx={{
            px: 2,
            py: [1, 1, 1, 1, 1, 4, 4],
            fontSize: [4, 4, 4, 4, 4, 3, 4],
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
