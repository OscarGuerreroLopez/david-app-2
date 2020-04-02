import React from "react";
import { Flex } from "rebass";

interface IProps {}
const About: React.FC<IProps> = (): JSX.Element => {
  return (
    <Flex
      justifyContent="flex-start"
      sx={{
        ml: ["auto"],
        px: [0, 0, 0, 0, 40, 70, 80],
        bg: "orange"
      }}
    >
      <h1>About</h1>
    </Flex>
  );
};

export default About;
