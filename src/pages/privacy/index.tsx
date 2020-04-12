import React, { useEffect } from "react";
import { Flex } from "rebass";
import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";

interface IProps {}
const Privacy: React.FC<IProps> = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex
      pt="3"
      flexWrap="wrap"
      sx={{
        ml: ["auto"],
        px: [0, 0, 0, 0, 0, 70, 80],
      }}
    >
      <Flex pt="2">
        <CustomCard>
          <Content
            title={"Cookies"}
            content={
              "En esta web recopilamos información y la gestionamos según indicamos en nuestra política de privacidad. Una de las formas es a través del uso de la tecnología llamada “cookies”."
            }
          />
          <Content
            title={"¿Qué es una cookie?"}
            content={
              "Una cookie es un fichero de texto inofensivo que se almacena en su navegador cuando visita casi cualquier página web. La utilidad de la cookie es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Aunque mucha gente no lo sabe las cookies se llevan utilizando desde hace 20 años, cuando aparecieron los primeros navegadores para la World Wide Web."
            }
          />

          <Content
            title={"¿Qué NO ES una cookie?"}
            content={
              "No es un virus, ni un troyano, ni un gusano, ni spam, ni spyware, ni abre ventanas pop-up."
            }
          />

          <Content
            title={"¿Qué información almacena una cookie?"}
            content={
              "Las cookies no suelen almacenar información sensible sobre usted, como tarjetas de crédito o datos bancarios, fotografías, su DNI o información personal, etc. Los datos que guardan son de carácter técnico, preferencias personales, personalización de contenidos, etc."
            }
          />

          <Content
            title={"¿Qué son las cookies propias y las de terceros?"}
            content={
              "Las cookies propias son las generadas por la página que está visitando y las de terceros son las generadas por servicios o proveedores externos como Facebook, Twitter, Google, etc."
            }
          />

          <Content
            title={"¿Qué cookies utiliza esta web?"}
            content={
              "Esta web utiliza cookies propias y de terceros, siguiendo las directrices de la Agencia Española de Protección de Datos y como exige el artículo 22.2 de la LSSI, procedo a detallar el uso de cookies que hace esta web con el fin de informarte con la máxima exactitud posible."
            }
          />

          <Content
            title={"Cookies de terceros"}
            content={
              "Esta web utiliza servicios de análisis, concretamente, Google Analytics para ayudar al website a analizar el uso que hacen los usuarios del sitio web y mejorar la usabilidad del mismo, pero en ningún caso se asocian a datos que pudieran llegar a identificar al usuario. Google Analytics, es un servicio analítico de web prestado por Google, Inc., El usuario puede consultar en este enlace el tipo de cookies utilizadas por Google."
            }
          />

          <Content
            title={"¿Se pueden eliminar las cookies?"}
            content={
              "Sí. No sólo eliminar, también bloquear, de forma general o particular para un dominio específico.\
            Para eliminar las cookies de un sitio web debe ir a la configuración de su navegador y allí podrá buscar las asociadas al dominio en cuestión y proceder a su eliminación."
            }
          />

          <Content
            title={"Más información sobre las cookies"}
            content={
              "Puede consultar el reglamento sobre cookies publicado por la Agencia Española de Protección de Datos en su “Guía sobre el uso de las cookies” y obtener más información sobre las cookies en Internet, http://www.aboutcookies.org/"
            }
          />
        </CustomCard>
      </Flex>

      <Flex pt="4">
        <CustomCard>
          <Content title={""} content={""} />
          <Content
            title={"Politica de Privacidad"}
            content={
              "En nuestra web se respetan y cuidan los datos personales de los usuarios. Como usuario debes saber que tus derechos están garantizados."
            }
          />
          <Content
            content={
              "Nunca solicitamos información personal a menos que realmente sea necesaria para prestarte los servicios y presupuestos que requieras."
            }
          />

          <Content
            content={
              "Nunca compartimos información personal de nuestros usuarios con nadie, excepto para cumplir con la ley o en caso que contemos con tu autorización expresa."
            }
          />

          <Content
            content={
              "Nunca utilizamos tus datos personales con una finalidad diferente a la expresada en esta política de privacidad."
            }
          />

          <Content
            content={
              "Hemos adecuado esta web a las exigencias del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD), así como con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE o LSSI)."
            }
          />
          <Content
            title={"Política de privacidad"}
            content={
              "De conformidad con lo previsto en el Reglamento General de Protección de Datos Europeo, se informa a los usuarios del sitio web https://automatismosdros.com de que los datos que faciliten, mediante la navegación o el uso de formularios, serán tratados de conformidad con la presente política de privacidad."
            }
          />

          <Content
            title={"¿Cuáles son tus derechos cuando nos facilitas tus datos?"}
            content={
              "Cualquier persona tiene derecho a obtener confirmación sobre si en Automatismos Dros. estamos tratando datos personales que nos concierne, o no."
            }
          />
          <Content
            content={
              "Los interesados podrán acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaré para el ejercicio o la defensa de reclamaciones."
            }
          />

          <Content
            title={"¿Por cuánto tiempo conservaré tus datos?"}
            content={
              "Los datos personales se conservarán mientras se mantengan pendientes o se estén ejecutando los servicios contratados."
            }
          />

          <Content
            title={"¿A qué destinatarios se comunicarán tus datos?"}
            content={
              "Google Analytics: un servicio analítico de web prestado por Google, Inc., una compañía de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos (“Google”). Google Analytics utiliza “cookies”, que son archivos de texto ubicados en tu ordenador, para ayudar a https://automatismosdros.com a analizar el uso que hacen los usuarios del sitio web. La información que genera la cookie acerca de su uso de https://automatismosdros.com (incluyendo tu dirección IP) será directamente transmitida y archivada por Google en los servidores de Estados Unidos."
            }
          />
          <Content
            title={"Navegación"}
            content={
              "Al navegar por https://automatismosdros.com se pueden recoger datos no identificables, que pueden incluir, direcciones IP, ubicación geográfica (aproximadamente), un registro de cómo se utilizan los servicios y sitios, y otros datos que no pueden ser utilizados para identificar al usuario. "
            }
          />
          <Content
            content={
              "Utilizamos esta información para analizar tendencias, administrar el sitio, rastrear los movimientos de los usuarios alrededor del sitio y para recopilar información demográfica sobre nuestra base de usuarios en su conjunto."
            }
          />
          <Content
            title={"Secreto y seguridad de los datos"}
            content={
              "https://automatismosdros.com se compromete en el uso y tratamiento de los datos incluidos personales de los usuarios, respetando su confidencialidad y a utilizarlos de acuerdo con la finalidad del mismo, así como a dar cumplimiento a su obligación de guardarlos y adaptar todas las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo establecido en la normativa vigente de protección de datos."
            }
          />
          <Content
            content={
              "Esta web incluye un certificado SSL. Se trata de un protocolo de seguridad que hace que tus datos viajen de manera íntegra y segura, es decir, la transmisión de los datos entre un servidor y usuario web, y en retroalimentación, es totalmente cifrada o encriptada."
            }
          />
          <Content
            title={"Aceptación y consentimiento"}
            content={
              "El usuario declara haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptando y consintiendo el tratamiento de los mismos por parte de automatismosdros en la forma y para las finalidades indicadas en esta política de privacidad."
            }
          />
          <Content
            title={"Cambios en la política de privacidad"}
            content={
              "automatismosdros se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos supuestos, automatismosdros anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica."
            }
          />
          <Content title={""} content={""} />
        </CustomCard>
      </Flex>
    </Flex>
  );
};

export default Privacy;
