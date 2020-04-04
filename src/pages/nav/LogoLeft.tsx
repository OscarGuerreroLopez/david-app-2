import React from "react";
import { Box, Image } from "rebass";
// import { useThemeUI } from "theme-ui";

interface IProps {
  image: string;
  onClick: () => void;
}
export const LogoLeft: React.FC<IProps> = ({ image, onClick }): JSX.Element => {
  // const context = useThemeUI();
  // const { colorMode } = context;

  return (
    <Box width={["100%", "100%", "100%", "100%", "80%", "10%", "10%"]}>
      <Image
        src={image}
        sx={{
          mt: 2,
          pl: 1,
          height: ["80%"],
        }}
        alt="Automatismos Dros"
        onClick={() => onClick()}
      />
    </Box>
  );
};
