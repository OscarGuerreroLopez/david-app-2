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
// import lock from "./images/lock.jpg";
import aperturas from "./images/aperturas.png";
import cerrajeria from "./images/cerrajeria.png";
import reparaciones from "./images/reparaciones.png";
import locksmith from "./images/residential-locksmith.jpg";

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

        <Flex flexWrap="wrap" pt="4">
          <Flex width={["100%", "100%", "100%", "100%", "100%", "70%", "70%"]}>
            <CustomCard>
              <Content
                title={"Cerrajeria en general"}
                content={
                  "Ofrecemos servicios de cerrajería de urgencia con tarifas económicas y sin perder un ápice de calidad. DROS está especializado en atender todos los problemas de cerrajería que puedan surgir en su hogar.\
                Realizamos apertura de puertas, cambio de cerrojos, reparación de cerraduras."
                }
              />
            </CustomCard>
          </Flex>
          <Flex width={["100%", "100%", "100%", "100%", "100%", "30%", "30%"]}>
            <Image
              src={locksmith}
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
            pl={["", "0", "0", "0", "0", "2", "2"]}
            pr={["", "0", "0", "0", "0", "2", "2"]}
          >
            <Flex width={["100%"]}>
              <CustomCard>
                <Flex justifyContent="center">
                  <Image
                    src={aperturas}
                    sx={{
                      width: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                      height: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                    }}
                    alt="Automatismos Dros"
                  />
                </Flex>
                <Content
                  title={"Aperturas"}
                  content={
                    "Más de 30 años de experiencia nos permiten garantizarles un eficaz trabajo en nuestros servicios de cerrajería y apertura de todo tipo de puertas y persianas.\
                  Prestamos servicios de apertura de puertas de comunidades, apertura de puertas de particulares, apertura de puertas de locales comerciales.\
                  Atendemos a llamadas con urgencia, desplazándonos de forma rápida al lugar de la incidencia, y buscamos la mejor solución para resolver su problema intentando ocasionar el menor daño posible."
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
                    src={cerrajeria}
                    sx={{
                      width: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                      height: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                    }}
                    alt="Cerrajería"
                  />
                </Flex>
                <Content
                  title={"Cerrajería"}
                  content={
                    "Dros, ofrece un eficaz servicio de cambio de cerraduras para emergencias. Somos rápidos y garantizamos todos nuestros trabajos, ya sean trabajos de urgencia como trabajos de cerrajería bajo presupuesto y a medida.\
                  Cambio de cerraduras, reposición de bombillos, instalación de cerraduras nuevas, son alguno de nuestros trabajos. DROS, está especializado en todo tipo de cerraduras."
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
                    src={reparaciones}
                    sx={{
                      width: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                      height: ["20%", "20%", "20%", "20%", "20%", "20%", "20%"],
                    }}
                    alt="Automatismos Dros"
                  />
                </Flex>
                <Content
                  title={"Reparaciones"}
                  content={
                    "DROS se ha especializado en la reparación de puertas, realizando trabajos de carpintería metálica en general\
                  Nuestro equipo de profesionales trabaja de forma limpia y sin provocar roturas o daños."
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
