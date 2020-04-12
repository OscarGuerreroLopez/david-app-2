import React from "react";
import { Text } from "rebass";

export const MobileTitle: React.FC = (): JSX.Element => {
  return (
    <Text
      sx={{
        fontSize: [3, 4, 4, 5, 6],
        textAlign: "center",
        width: ["100%"],
        fontFamily: "chewy",
        "@media screen and (min-width: 1023px)": {
          display: "none",
        },
      }}
    >
      Automatismos y cerrajeria Dros
    </Text>
  );
};
