import React, { useEffect, useContext } from "react";
import { Flex, Image, Text, Link } from "rebass";
import { Helmet } from "react-helmet";

import { CustomCard } from "../../components/customCard";
import { LocationContext } from "../../utils/locationContext";

// import { Content } from "../../components/cardContent";

import whatsapp from "./whatsapp.png";

interface IProps {}
const Contact: React.FC<IProps> = (): JSX.Element => {
  const { location } = useContext(LocationContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const number = "34622450008";
  const message = "Me gustaria saber mas sobre vosotros";

  return (
    <>
      <Helmet>
        <title>Automatismos y cerrajeria en {location.town || "Madrid"}</title>
        <meta
          name="description"
          content={`Automatismos y Cerrajería en ${
            location.town || "Madrid"
          }. Telf: 606 33 32 72. Reparación puerta garage. Cerrajero urgente. Arreglo puerta corredera. Puertas automáticas.`}
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
                fontSize={[5, 5, 5, 5, 5, 6, 6]}
                fontWeight="bold"
                textAlign="center"
              >
                Como contactarnos:
              </Text>
              <Text
                p={1}
                fontSize={[3, 3, 3, 4, 4, 5, 5]}
                fontWeight="bold"
                textAlign="center"
              >
                Atendemos urgencias las 24h
              </Text>

              <Text
                p={1}
                fontSize={[3, 3, 3, 4, 4, 5, 5]}
                fontWeight="bold"
                textAlign="center"
              >
                {location.town ? `${location.town} y alrededores` : ""}
              </Text>

              <Text
                p={1}
                fontSize={[3, 3, 3, 4, 4, 5, 5]}
                fontWeight="bold"
                textAlign="center"
              >
                Telefono:
              </Text>
              <Text p={1} fontSize={[4, 4, 4, 5, 5, 6, 6]} textAlign="center">
                <Link
                  href="tel:+34-622-450-008"
                  sx={{ textDecoration: "none", color: "primary " }}
                >
                  <Text>622 333 111</Text>
                </Link>
              </Text>
              <br />
              <Flex justifyContent="center">
                <Link
                  href={`https://api.whatsapp.com/send?phone=${number}&text=%20${message}`}
                >
                  <Image
                    src={whatsapp}
                    sx={{
                      maxHeight: [80, 80, 80, 80, 80, 80, 80],
                    }}
                    alt="Automatismos Dros"
                  />
                </Link>
              </Flex>
              <br />
              <Text
                p={1}
                fontWeight="bold"
                fontSize={[3, 3, 3, 4, 4, 5, 5]}
                textAlign="center"
              >
                Correo Electronico:
              </Text>
              <Text p={1} fontSize={[3, 3, 3, 4, 4, 5, 5]} textAlign="center">
                <Link
                  href="mailto:oscarlopez75@gmail.com?subject=Solicitud para Dros&body=A la atención de Dros"
                  sx={{ textDecoration: "none", color: "primary " }}
                >
                  <Text>automatismos.dros@gmail.com</Text>
                </Link>
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
    </>
  );
};

export default Contact;
