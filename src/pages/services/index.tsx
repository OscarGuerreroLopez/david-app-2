import React, { useEffect } from "react";
import { Flex, Image } from "rebass";
import axios from "axios";
import { find as _find } from "lodash";
import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";

import garage from "./images/garage_door_small.jpg";
import gate1 from "./images/gate1.png";
import remote from "./images/remote.png";
import repairs from "./images/repairs.png";
import maintenance from "./images/maintenance.png";

interface IProps {}

const Services: React.FC<IProps> = (): JSX.Element => {
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
        <Flex
          width={["100%", "100%", "100%", "100%", "100%", "30%", "30%"]}
          bg="orange"
        >
          <Image
            src={gate1}
            sx={{
              width: ["100%"],
              filter: "grayscale(100%)",
            }}
            alt="Automatismos Dros"
          />
        </Flex>
      </Flex>
      <Flex pt="4">
        <CustomCard>
          <Content
            title={"Nuestro compromiso"}
            content={
              "Contamos con un equipo de trabajo que ama su oficio y que sabe lo que es esforzarse para obtener un excelente resultado final. \
              Tenemos claro nuestros objetivos y la normativa vigente cuando de reparación de puertas automáticas se trata.\
              En Automatismos DROS entendemos que este es un sector cada día más competitivo y de reputación, por esta razón, \
              nos esforzamos para ofrecerle calidad en cada servicio prestado, dedicándole buena parte de nuestro empeño al estudio de nuevos materiales y de efectivas soluciones de reparación de puertas automáticas de garaje.\
              "
            }
          />
        </CustomCard>
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
                  src={repairs}
                  sx={{
                    width: ["40%", "40%", "40%", "35%", "30%", "80%", "80%"],
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
                    width: ["40%", "40%", "40%", "35%", "30%", "80%", "80%"],
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
                    width: ["40%", "40%", "40%", "35%", "30%", "80%", "80%"],
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
    </Flex>
  );
};

export default Services;
