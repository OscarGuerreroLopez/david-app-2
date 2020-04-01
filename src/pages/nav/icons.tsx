import React from "react";

import { Flex, Box, Card, Image } from "rebass";

import WhatsApp2 from "./images/whatsapp3.png";
import WhatsApp1 from "./images/whatsapp2.png";

import Calling from "./images/calling.svg";
import Envelope from "./images/envelope.svg";
import { useThemeUI } from "theme-ui";

interface IProps {}

export const Icons: React.FC<IProps> = (...props) => {
  const context = useThemeUI();
  const heightSize = [80, 90, 120, 160, 180];
  return (
    <Flex
      {...props}
      sx={{
        display: ["", "", "", "", "", "none", "none"],
        mt: [3, 3, 2, 2, 2, 1, 1, 1]
      }}
    >
      <Box p={3} width={1} color="#3383FF">
        <Card>
          <Image
            src={context.colorMode === "default" ? WhatsApp1 : WhatsApp2}
            sx={{
              maxHeight: heightSize
            }}
          />
        </Card>
      </Box>
      <Box p={3} width={1} color="#3383FF">
        <Card>
          <Image
            src={Calling}
            sx={{
              maxHeight: [40, 80, 80, 100, 120]
            }}
          />
        </Card>
      </Box>
      <Box p={3} width={1} color="#3383FF">
        <Card>
          <Image
            src={Envelope}
            sx={{
              maxHeight: [40, 80, 80, 100, 120]
            }}
          />
        </Card>
      </Box>
    </Flex>
  );
};
