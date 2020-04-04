import React from "react";
import { Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  links: string[];
  displayLinks: boolean;
  onClick: (link: string) => void;
}
export const LinksBellow: React.FC<IProps> = ({
  links,
  displayLinks,
  onClick,
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode, setColorMode } = context;

  return (
    <>
      {displayLinks &&
        links.map((link: string) => {
          const index = uuidv4();
          return (
            <Flex
              justifyContent="center"
              sx={{
                "@media screen and (min-width: 1023px)": {
                  display: "none",
                },
                fontFamily: "chewy",
                color: (theme) => `${colorMode === "dark" ? "#3383FF" : null}`,
                // bg: theme => `${colorMode === "default" ? "#EEEEEC" : null}`
              }}
              key={index}
            >
              <Text
                sx={{ fontSize: [4, 5, 5, 5, 6, 4, 4] }}
                onClick={() => {
                  onClick(link);
                }}
              >
                {link}
              </Text>
            </Flex>
          );
        })}
      {displayLinks && (
        <Flex
          justifyContent="center"
          sx={{
            cursor: "pointer",
            "@media screen and (min-width: 1023px)": {
              display: "none",
            },
            fontFamily: "chewy",
            color: (theme) => `${colorMode === "dark" ? "#3383FF" : null}`,
            // bg: (theme) => `${colorMode === "default" ? "#EEEEEC" : null}`,
          }}
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          <Text sx={{ fontSize: [4, 5, 5, 5, 6, 4, 4] }}>
            Modo {colorMode === "default" ? "Oscuro" : "Claro"}
          </Text>
        </Flex>
      )}
    </>
  );
};
