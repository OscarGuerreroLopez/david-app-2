import React, { useState } from "react";
import { Flex } from "rebass";

import { Links } from "./links";
import { LinksBellow } from "./linksBellow";
import { LogoLeft } from "./LogoLeft";
import { LogoRight } from "./LogoRight";
import light from "./images/logo7.png";
import dark from "./images/logo8.png";

import { useThemeUI } from "theme-ui";

interface IProps {}

const Nav: React.FC<IProps> = (): JSX.Element => {
  const linkArray = ["Nosotros", "Servicios", "Contacto", "Another"];
  const [displayLinks, setDisplayLinks] = useState(false);
  const context = useThemeUI();
  const { colorMode } = context;
  return (
    <>
      <Flex
        justifyContent="flex-start"
        sx={{
          maxHeight: "90px",
          color: theme => `${colorMode === "dark" ? "#3383FF" : null}`,
          bg: theme => `${colorMode === "default" ? "#EEEEEC" : null}`
        }}
      >
        <Flex
          sx={{
            ml: ["left"],
            width: ["40%", "35%", "25%", "18%", "11%", "50%", "50%"]
          }}
        >
          <LogoLeft image={colorMode === "dark" ? dark : light} />
          <Links links={linkArray} />
        </Flex>

        <LogoRight
          displayLinks={displayLinks}
          setDisplayLinks={setDisplayLinks}
        />
      </Flex>

      <LinksBellow links={linkArray} displayLinks={displayLinks} />
    </>
  );
};

export default Nav;
