import React from "react";
import { Box, Image } from "rebass";

interface IProps {
  picture: string;
}
export const LittleImage: React.FC<IProps> = ({ picture }): JSX.Element => {
  return (
    <Box p={3} width={1} sx={{ textAlign: "center" }}>
      <Image
        src={picture}
        sx={{
          width: 68,
          height: 68,
          borderRadius: 9
        }}
      />
    </Box>
  );
};
