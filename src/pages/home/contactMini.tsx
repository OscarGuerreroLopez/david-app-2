import React from "react";
import { Flex, Text, Card, Image } from "rebass";
import { CustomCard } from "../../components/customCard";
import contact from "./images/contact.jpg";

interface IProps {
  onClick: () => void;
}

export const ContactMini: React.FC<IProps> = ({ onClick }): JSX.Element => {
  return (
    <Flex
      mx={0}
      sx={{
        textAlign: "center",
        position: "relative",
        pt: [3, 4, 4, 4, 4, 0, 0]
      }}
    >
      <CustomCard>
        <Text
          fontSize={[4, 5, 5, 5, 5, 5, 5]}
          fontWeight="bold"
          textAlign="center"
        >
          Contactanos sin compromiso
        </Text>
        <Flex justifyContent="flex-start" flexWrap="wrap">
          <Card width={[256, 320]} mx="auto">
            <Image src={contact} alt="Automatismos Dros" />
          </Card>
          <Text fontSize={[3, 4, 5]}>
            Si tiene cualquier tipo de propuesta que realizarnos, póngase en
            contacto con nosotros a través de nuestro formulario de contacto, el
            cual podrá encontrar en el menú superior o pulsando el enlace bajo
            este texto.
          </Text>
          <Text
            fontSize={[4, 5, 5, 5, 5, 5, 5]}
            fontWeight="bold"
            style={{ cursor: "pointer", color: "#3383FF" }}
            onClick={onClick}
          >
            Contacto...
          </Text>
        </Flex>
      </CustomCard>
    </Flex>
  );
};
