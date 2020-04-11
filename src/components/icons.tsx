import React from "react";

import { Flex, Box, Card, Image, Link } from "rebass";

import WhatsApp2 from "./images/whatsapp3.png";
import WhatsApp1 from "./images/whatsapp2.png";

import Calling from "./images/calling.svg";
import Envelope from "./images/envelope.svg";
import { useThemeUI } from "theme-ui";

interface IProps {}

export const Icons: React.FC<IProps> = () => {
  const context = useThemeUI();
  const heightSize = [80, 90, 120, 160, 180];

  const number = "34622450008";
  const message = "Que pasa gilipollas?";

  return (
    <Flex
      sx={{
        display: ["", "", "", "", "", "none", "none"],
        mt: [3, 3, 2, 2, 2, 1, 1, 1],
      }}
    >
      <Box p={3} width={1} color="#3383FF">
        <Card>
          <Link
            href={`https://api.whatsapp.com/send?phone=${number}&text=%20${message}`}
          >
            <Image
              src={context.colorMode === "default" ? WhatsApp1 : WhatsApp2}
              sx={{
                maxHeight: heightSize,
              }}
              alt="Automatismos Dros"
            />
          </Link>
        </Card>
      </Box>
      <Box p={3} width={1} color="#3383FF">
        <Card>
          <Link href="tel:+34-622-450-008">
            <Image
              src={Calling}
              sx={{
                maxHeight: [40, 80, 80, 100, 120],
              }}
              alt="Automatismos Dros"
            />
          </Link>
        </Card>
      </Box>
      <Box p={3} width={1} color="#3383FF">
        <Card>
          <Link href="mailto:oscarlopez75@gmail.com?subject=Solicitud para Dros&body=Mira que eres tonto tu, como vaya te doy de hostias">
            <Image
              src={Envelope}
              sx={{
                maxHeight: [40, 80, 80, 100, 120],
              }}
              alt="Automatismos Dros"
            />
          </Link>
        </Card>
      </Box>
    </Flex>
  );
};
