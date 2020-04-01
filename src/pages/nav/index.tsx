import React, { useState } from "react";
import { Flex } from "rebass";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { Links } from "./links";
import { LinksBellow } from "./linksBellow";
import { LogoLeft } from "./LogoLeft";
import { LogoRight } from "./LogoRight";
import { Icons } from "./icons";
import light from "./images/logo7.png";
import dark from "./images/logo8.png";

import { useThemeUI } from "theme-ui";

interface IProps extends RouteComponentProps {}

const Nav = withRouter((props: IProps) => {
  const linkArray = ["Nosotros", "Servicios", "Contacto", "Another"];
  const [displayLinks, setDisplayLinks] = useState(false);
  const context = useThemeUI();
  const { colorMode } = context;
  console.log(props);

  return (
    <>
      <Flex
        justifyContent="flex-start"
        sx={{
          maxHeight: "90px",
          color: theme => `${colorMode === "dark" ? "#3383FF" : null}`,
          bg: theme => `${colorMode === "default" ? "#EEEEEC" : null}`,
          px: [0, 1, 2, 2, 2, 2, 2]
        }}
      >
        <Flex
          sx={{
            ml: ["left"],
            width: ["20%", "20%", "20%", "20%", "20%", "60%", "60%"]
          }}
        >
          <LogoLeft image={colorMode === "dark" ? dark : light} />
          <Links links={linkArray} />
        </Flex>
        <Flex
          sx={{
            ml: ["auto"]
          }}
        >
          <Icons />
        </Flex>
        <Flex
          sx={{
            ml: ["auto"],
            width: ["20%", "20%", "20%", "20%", "20%", "40%", "47%"]
          }}
        >
          <LogoRight
            displayLinks={displayLinks}
            setDisplayLinks={setDisplayLinks}
          />
        </Flex>
      </Flex>

      <LinksBellow links={linkArray} displayLinks={displayLinks} />
    </>
  );
});

export default Nav;
