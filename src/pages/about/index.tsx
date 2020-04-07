import React, { useEffect } from "react";
import { Flex, Image, Box } from "rebass";
import axios from "axios";
import { find as _find } from "lodash";

import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";
import garage from "./images/garage_door_small.jpg";
import speed from "./images/speed.png";
import quality from "./images/quality.png";

interface IProps {}

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
        px: [0, 0, 0, 0, 0, 170, 180],
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
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          width: ["100%"],
          pr: ["0", "0", "0", "0", "0", "2", "2"],
          pt: ["4"],
          pl: ["0", "0", "0", "0", "0", "2", "2"],
        }}
      >
        <Flex>
          <Box pl={[0, 2, 3, 4, 5, 5, 0]}>
            <Image
              src={quality}
              sx={{
                width: ["100%"],
                borderRadius: 8,
              }}
            />
          </Box>
          <Box p={1} pr={[0, 2, 3, 4, 5, 5, 0]}>
            <Image
              src={speed}
              sx={{
                width: ["100%"],
                borderRadius: 8,
              }}
            />
          </Box>
        </Flex>
        <Flex>
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
    </Flex>
  );
};

export default About;
