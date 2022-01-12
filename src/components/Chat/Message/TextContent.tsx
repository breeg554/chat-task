import React from "react";
import { Title, Text } from "../..";
import { TextMessage } from "../../../types";
import { StyledTextContent } from "./style";

interface TextContentProps {
  data: TextMessage;
  isOwner: boolean;
}

export const TextContent: React.FC<TextContentProps> = React.memo(({ data, isOwner }) => {
  return (
    <StyledTextContent isOwner={isOwner}>
      <Title white={isOwner}>{data.author.name}</Title>
      <Text white={isOwner}>{data.text}</Text>
    </StyledTextContent>
  );
});
