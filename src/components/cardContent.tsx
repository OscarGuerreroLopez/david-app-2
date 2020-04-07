import React from "react";
import { Text } from "rebass";

interface IContent {
  title: string;
  content: string;
}

export const Content: React.FC<IContent> = ({
  title,
  content,
}): JSX.Element => {
  return (
    <>
      <Text
        fontSize={[3, 3, 4, 4, 4, 5, 5]}
        fontWeight="bold"
        textAlign="center"
      >
        {title}:
      </Text>
      <Text p={1} fontSize={[2, 2, 2, 2, 3, 3, 4]}>
        {content}
      </Text>
    </>
  );
};
