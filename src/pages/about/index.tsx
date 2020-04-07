import React, { useEffect } from "react";
import { Flex, Text, Image } from "rebass";
import axios from "axios";
import { find as _find } from "lodash";

import { CustomCard } from "../../components/customCard";
import garage from "./images/garage_door_small.jpg";

interface IProps {}

interface IContent {
  title: string;
  content: string;
}

const Content: React.FC<IContent> = ({ title, content }): JSX.Element => {
  return (
    <>
      <Text
        fontSize={[3, 3, 4, 4, 4, 5, 5]}
        fontWeight="bold"
        textAlign="center"
      >
        {title}:
      </Text>
      <Text p={1} fontSize={[3, 3, 3, 3, 4, 4, 5]}>
        {content}
      </Text>
    </>
  );
};

const About: React.FC<IProps> = (): JSX.Element => {
  useEffect(() => {
    const getData = async (): Promise<any> => {
      try {
        const result = await axios.get(
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=espana-municipios&facet=communidad_autonoma&facet=provincia&facet=municipio&refine.provincia=Madrid"
        );
        console.log(result.data.facet_groups);
        const municipios = _find(result.data.facet_groups, (o) => {
          return o.name === "municipio";
        });

        console.log(municipios.facets);
      } catch (error) {
        console.log("!!!", error);
      }
    };

    getData();
  }, []);

  return (
    <Flex
      flexWrap="wrap"
      sx={{
        px: [0, 0, 0, 0, 40, 70, 80],
      }}
    >
      <Image
        src={garage}
        sx={{
          width: ["100%"],
          height: ["100%"],
          filter: "grayscale(100%)",
        }}
        alt="Automatismos Dros"
      />
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          width: ["100%"],
        }}
      >
        <Flex
          justifyContent="center"
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
            pr: ["0", "0", "0", "0", "0", "2", "2"],
            pt: ["4"],
            pl: ["0", "0", "0", "0", "0", "2", "2"],
            height: [null, null, null, null, null, "100%", "100%"],
          }}
        >
          <CustomCard>
            <Content
              title={"Quienes somos"}
              content={
                "Nuestra empresa está formada por grandes profesionales del sector de la cerrajería, automatismos y carpintería metálica. En DROS Automatismos y Cerrajería nos caracterizamos por nuestro alto nivel de profesionalidad, ofreciendo siempre un servicio ágil, rápido y serio, consiguiendo un alto nivel de satisfacción en nuestros clientes."
              }
            />
          </CustomCard>
        </Flex>
        <Flex
          justifyContent={[
            "center",
            "center",
            "center",
            "center",
            "center",
            "left",
            "left",
          ]}
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
            pr: ["0", "0", "0", "0", "0", "2", "2"],
            pt: ["4"],
            pl: ["0", "0", "0", "0", "0", "2", "2"],
            height: [null, null, null, null, null, "100%", "100%"],
          }}
        >
          <CustomCard>
            <Content
              title={"Que ofrecemos"}
              content={
                "Ofrecemos todo tipo de servicios relacionados con cerrajería: cerraduras de alta seguridad, apertura urgente, instalación y mantenimiento de automatismos, carpintería metálica, vallados y cerramientos… Trabajamos tanto para comunidades como para aseguradoras o particulares."
              }
            />
          </CustomCard>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        sx={{
          width: ["100%", "100%", "100%", "100%", "100%", "100%", "100%"],
          pr: ["0", "0", "0", "0", "0", "2", "2"],
          pt: ["4"],
          pl: ["0", "0", "0", "0", "0", "2", "2"],
        }}
      >
        <CustomCard>
          <Content
            title={"Por que confiar en nosotros?"}
            content={
              "Contamos con 30 años de experiencia en el sector. Tenemos el  objetivo de conseguir la confianza de nuestros clientes, ofreciendo un servicio de alta calidad y a un precio justo."
            }
          />
        </CustomCard>
      </Flex>
    </Flex>
  );
};

export default About;
