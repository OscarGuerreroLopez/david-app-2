/** @jsx jsx */
import React from "react";
import { Card } from "rebass";
import { jsx } from "@emotion/core";
import { useThemeUI } from "theme-ui";

interface IProps {
  [key: string]: any;
}

export const CustomCard: React.FC<IProps> = ({
  children,
  ...props
}): JSX.Element => {
  const context = useThemeUI();

  return (
    <Card
      {...props}
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: `${
          context.colorMode !== "default"
            ? "0 0 16px rgba(252, 250, 249, .125)"
            : "0 0 16px rgba(0, 0, 0, .25)"
        }`,
        alignItems: "right",
        background: `${context.colorMode !== "default" ? "#202020" : ""}`,
        height: [null, null, null, null, null, "100%", "100%"]
      }}
    >
      {children}
    </Card>
  );
};
