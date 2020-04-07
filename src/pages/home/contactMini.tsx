import React from "react";
import { Flex, Text, Card, Image } from "rebass";
import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";
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
        pt: [3, 4, 4, 4, 4, 0, 0],
      }}
    >
      <CustomCard>
        <Content
          title={"Contactanos sin compromiso"}
          content={
            "Si tiene cualquier tipo de propuesta que realizarnos, póngase en\
          contacto con nosotros a través de nuestro formulario de contacto, el\
          cual podrá encontrar en el menú superior o pulsando el enlace bajo\
          este texto."
          }
        />
        <Flex justifyContent="flex-start" flexWrap="wrap">
          <Card width={[256, 320]} mx="auto">
            <Image src={contact} alt="Automatismos Dros" />
          </Card>
        </Flex>
        <Text
          fontSize={[2, 3, 4, 4, 5]}
          textAlign="left"
          fontWeight="bold"
          style={{ cursor: "pointer", color: "#3383FF" }}
          onClick={onClick}
        >
          Contacto...
        </Text>
      </CustomCard>
    </Flex>
  );
};
