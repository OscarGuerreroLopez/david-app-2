import React, { useEffect } from "react";
import { Flex, Image, Text } from "rebass";

import { CustomCard } from "../../components/customCard";
// import { Content } from "../../components/cardContent";

import whatsapp from "./whatsapp.png";

interface IProps {}
const Contact: React.FC<IProps> = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const heightSize = [80, 90, 120, 160, 180, 180, 180];

  return (
    <Flex
      justifyContent="flex-start"
      flexWrap="wrap"
      sx={{
        ml: ["auto"],
        px: [0, 0, 0, 0, 0, 70, 80],
      }}
    >
      <Flex flexWrap="wrap" pt="4" width="100%" justifyContent="center">
        <Flex
          justifyContent="center"
          width={["100%", "100%", "100%", "100%", "100%", "100%", "100%"]}
          px={["0", "0", "0", "0", "0", "2", "2"]}
          py="2"
        >
          <CustomCard>
            <Text
              fontSize={[3, 3, 4, 4, 4, 5, 5]}
              fontWeight="bold"
              textAlign="center"
            >
              Como contactarnos:
            </Text>
            <Text
              p={1}
              fontSize={[2, 2, 2, 2, 3, 3, 4]}
              fontWeight="bold"
              textAlign="center"
            >
              Atendemos urgencias las 24h
            </Text>

            <Text
              p={1}
              fontSize={[2, 2, 2, 2, 3, 3, 4]}
              fontWeight="bold"
              textAlign="center"
            >
              Telefono:
            </Text>
            <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]} textAlign="center">
              <Text>622 333 111</Text>
            </Text>
            <br />
            <Flex justifyContent="center">
              <Image
                src={whatsapp}
                sx={{
                  maxHeight: [80, 80, 80, 80, 80, 80, 80],
                }}
                alt="Automatismos Dros"
              />
            </Flex>
            <br />
            <Text
              p={1}
              fontWeight="bold"
              fontSize={[2, 2, 2, 2, 3, 3, 4]}
              textAlign="center"
            >
              Correo Electronico:
            </Text>
            <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]} textAlign="center">
              <a href="mailto:oscarlopez75@gmail.com?subject=Solicitud para Dros&body=Mira que eres tonto tu, como vaya te doy de hostias">
                <Text color="primary">automatismos.dros@gmail.com</Text>
              </a>
            </Text>
          </CustomCard>
        </Flex>
        {/* <Flex
          justifyContent="center"
          width={["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"]}
          px={["0", "0", "0", "0", "0", "2", "2"]}
          py="2"
        >
          <CustomCard>
            <Content title={"Telefono"} content={"699 222 333"} />
          </CustomCard>
        </Flex>
        <Flex
          justifyContent="center"
          width={["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"]}
          px={["0", "0", "0", "0", "0", "2", "2"]}
          py="2"
        >
          <CustomCard>
            <Content title={"Email"} content={"automatismos.dros@gmail.com"} />
          </CustomCard>
        </Flex> */}
      </Flex>
    </Flex>
  );
};

export default Contact;
