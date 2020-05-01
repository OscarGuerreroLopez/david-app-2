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

  const number = "34606333272";
  const message = "Me gustaria saber mas sobre vosotros";

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
          <Link href="tel:+34-606-33-32-72">
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
          <Link href="mailto:davidjandro@hotmail.com?subject=Solicitud para Dros&body=A la atención de Dros">
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
