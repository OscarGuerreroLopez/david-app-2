import React, { useEffect, useContext } from "react";
import { Flex, Image, Text, Link } from "rebass";

import { CustomCard } from "../../components/customCard";
import { LocationContext } from "../../utils/locationContext";
import { MetaTags } from "../../components/metaTags";
import { ReactGa } from "../../utils/reactGa";

import whatsapp from "./whatsapp.png";

interface IProps {}
const Contact: React.FC<IProps> = (): JSX.Element => {
  const { location } = useContext(LocationContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGa(window.location.pathname + window.location.search);
  }, []);

  const number = "34606333272";
  const message = "Me gustaria saber mas sobre vosotros";

  return (
    <>
      <MetaTags />

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
                  href="tel:695-99-59-69"
                  sx={{ textDecoration: "none", color: "primary " }}
                >
                  <Text>695 995 969</Text>
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
                  href="mailto:davidjandro@hotmail.com?subject=Solicitud para Dros&body=A la atención de Dros"
                  sx={{ textDecoration: "none", color: "primary " }}
                >
                  <Text>davidjandro@hotmail.com</Text>
                </Link>
              </Text>
            </CustomCard>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
