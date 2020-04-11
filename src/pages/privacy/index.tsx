import React, { useEffect } from "react";
import { Flex, Card, Image } from "rebass";

interface IProps {}
const Privacy: React.FC<IProps> = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex>
      <Card width={["auto"]} mx="auto">
        <Image
          src="https://images-na.ssl-images-amazon.com/images/I/81PM265K3%2BL._AC_SL1500_.jpg"
          alt="Automatismos Dros"
        />
      </Card>
    </Flex>
  );
};

export default Privacy;
