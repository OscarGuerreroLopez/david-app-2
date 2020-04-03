import React from "react";
import { Box, Image, Button, Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";

import bars from "./images/bars.svg";
import bars2 from "./images/bars2.svg";

interface IProps {
  displayLinks: boolean;
  setDisplayLinks: (displayLinks: boolean) => void;
}
export const LogoRight: React.FC<IProps> = ({
  displayLinks,
  setDisplayLinks
}): JSX.Element => {
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <Flex sx={{ ml: ["auto"] }}>
      <Box
        width={["100%", "100%", "100%", "100%", "100%", "50%", "12%"]}
        sx={{
          ml: ["auto"],
          mt: 0,
          mb: 1,
          minWidth: "59px",
          minHeight: "59px",

          "@media screen and (min-width: 1024px)": {
            display: "none"
          },

          svg: {
            position: "relative",
            top: "2px"
          }
        }}
      >
        <Button
          variant="outline"
          bg="inherit"
          sx={{
            mt: ["23px", "22px", "18px", "23px", "27px", "20px", "20px"]
          }}
          onClick={() => {
            setDisplayLinks(!displayLinks);
          }}
        >
          <Image
            // src={colorMode === "dark" ? barsDark : barsLight}
            src={colorMode === "default" ? bars : bars2}
            sx={{
              width: ["100%", "100%"]
            }}
            alt="Automatismos Dros"
          />
        </Button>
      </Box>
      <Box
        sx={{
          "@media screen and (max-width: 1023px)": {
            display: "none"
          },
          px: 2,
          py: [1, 1, 1, 1, 1, "28px", "17px"]
        }}
      >
        <Text
          sx={{
            fontSize: [4, 4, 4, 4, 4, 28, 6]
          }}
        >
          Automatismos y cerrajeria DROS
        </Text>
      </Box>
    </Flex>
  );
};
