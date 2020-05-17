import React, { useEffect } from "react";
import { Flex, Image } from "rebass";
// import axios from "axios";
// import { find as _find } from "lodash";
import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";
import { MetaTags } from "../../components/metaTags";

import garage from "./images/garage_door_small.jpg";
import gate1 from "./images/gate1.jpg";
import remote from "./images/remote.png";
import repairs from "./images/repairs.png";
import maintenance from "./images/maintenance.png";

interface IProps {}

const Services: React.FC<IProps> = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaTags />
      <Flex
        flexWrap="wrap"
        sx={{
          px: [0, 0, 0, 0, 0, 70, 120],
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

        <Flex flexWrap="wrap" pt="4">
          <Flex width={["100%", "100%", "100%", "100%", "100%", "70%", "70%"]}>
            <CustomCard>
              <Content
                title={"Automatismos para puertas"}
                content={
                  "Arreglo e instalación de motores para  puertas de garaje, correderas, secciónales, abatibles, batientes  y cierres metálicos\
                Contamos con un equipo de trabajo que ama su oficio y que sabe lo que es esforzarse para obtener un excelente resultado final. Tenemos claro nuestros objetivos y la normativa vigente cuando de reparación de puertas automáticas se trata."
                }
              />
            </CustomCard>
          </Flex>
          <Flex width={["100%", "100%", "100%", "100%", "100%", "30%", "30%"]}>
            <Image
              src={gate1}
              sx={{
                width: ["100%"],
                height: ["100%"],
                filter: "grayscale(100%)",
              }}
              alt="Automatismos Dros"
            />
          </Flex>
        </Flex>

        <Flex flexWrap="wrap" pt="4" width={["100%"]}>
          <Flex
            width={["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"]}
            flexWrap="wrap"
            pl={["0", "0", "0", "0", "0", "2", "2"]}
            pr={["0", "0", "0", "0", "0", "2", "2"]}
          >
            <Flex width={["100%"]}>
              <CustomCard>
                <Flex justifyContent="center">
                  <Image
                    src={repairs}
                    sx={{
                      width: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                      height: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                    }}
                    alt="Automatismos Dros"
                  />
                </Flex>
                <Content
                  title={"Atasco en las puertas automáticas"}
                  content={
                    "En nuestra empresa contamos con el personal más idóneo para darle solución oportuna. Tenemos en cuenta todos los detalles para que\
               su puerta automática recupere el excelente rendimiento. "
                  }
                />
              </CustomCard>
            </Flex>
          </Flex>
          <Flex
            width={["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"]}
            flexWrap="wrap"
            pl={["", "0", "0", "0", "0", "2", "2"]}
            pr={["", "0", "0", "0", "0", "2", "2"]}
            pt={["4", "4", "4", "4", "4", "0", "0"]}
          >
            <Flex width={["100%"]}>
              <CustomCard>
                <Flex justifyContent="center">
                  <Image
                    src={remote}
                    sx={{
                      width: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                      height: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                    }}
                    alt="Automatismos Dros"
                  />
                </Flex>
                <Content
                  title={"Avería en el mando de control"}
                  content={
                    "Cuando falla el mando de control debe recurrirse de inmediato a un experto para obtener una solución y continuar disfrutando de la comodidad que ofrece una puerta de garaje automática."
                  }
                />
              </CustomCard>
            </Flex>
          </Flex>
          <Flex
            width={["100%", "100%", "100%", "100%", "100%", "33.3%", "33.3%"]}
            flexWrap="wrap"
            pl={["", "0", "0", "0", "0", "2", "2"]}
            pr={["", "0", "0", "0", "0", "2", "2"]}
            pt={["4", "4", "4", "4", "4", "0", "0"]}
          >
            <Flex width={["100%"]}>
              <CustomCard>
                <Flex justifyContent="center">
                  <Image
                    src={maintenance}
                    sx={{
                      width: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                      height: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                    }}
                    alt="Automatismos Dros"
                  />
                </Flex>
                <Content
                  title={"Mantenimiento deficiente"}
                  content={
                    "Al igual que cualquier dispositivo, las puertas de garaje automáticas llegan al punto de tener desgaste y para esto es necesario realizar mantenimientos periódicos que garanticen el reemplazo oportuno de repuestos. "
                  }
                />
              </CustomCard>
            </Flex>
          </Flex>
        </Flex>

        {/* <Image
        src={locksmith}
        sx={{
          width: ["100%"],
          height: ["100%"],
          filter: "grayscale(100%)",
          pt: "4",
        }}
        alt="Automatismos Dros"
      /> */}

        {/* <Flex flexWrap="wrap" pt="4" width={["100%"]} justifyContent="center">
        <Text
          fontSize={[3, 3, 4, 4, 4, 5, 5]}
          fontWeight="bold"
          textAlign="center"
          width="100%"
        >
          Municipios en los que trabajamos:
        </Text>
        <Flex
          flexWrap="wrap"
          width={["100%", "100%", "100%", "100%", "100%", "25%", "25%"]}
          justifyContent="center"
        >
          {municipios1 &&
            municipios1.map((nameObj: any, index: number) => {
              return (
                <Text width="100%" textAlign="center" key={index}>
                  {nameObj.name}
                </Text>
              );
            })}
        </Flex>
        <Flex
          flexWrap="wrap"
          width={["100%", "100%", "100%", "100%", "100%", "25%", "25%"]}
          justifyContent="center"
        >
          {municipios2 &&
            municipios2.map((nameObj: any, index: number) => {
              return (
                <Text width="100%" textAlign="center" key={index}>
                  {nameObj.name}
                </Text>
              );
            })}
        </Flex>
        <Flex
          flexWrap="wrap"
          width={["100%", "100%", "100%", "100%", "100%", "25%", "25%"]}
          justifyContent="center"
        >
          {municipios3 &&
            municipios3.map((nameObj: any, index: number) => {
              return (
                <Text width="100%" textAlign="center" key={index}>
                  {nameObj.name}
                </Text>
              );
            })}
        </Flex>
        <Flex
          flexWrap="wrap"
          width={["100%", "100%", "100%", "100%", "100%", "25%", "25%"]}
          justifyContent="center"
        >
          {municipios4 &&
            municipios4.map((nameObj: any, index: number) => {
              return (
                <Text width="100%" textAlign="center" key={index}>
                  {nameObj.name}
                </Text>
              );
            })}
        </Flex>
      </Flex> */}
      </Flex>
    </>
  );
};

export default Services;
