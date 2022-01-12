import React, { useState } from "react";
import dayjs from "../../../lib/dayjs";
import { Title, Text } from "../..";
import { TextMessage } from "../../../types";
import { MessageFooter, TextContentEdit } from ".";
import { StyledModifiedMessage, StyledTextContent } from "./style";

interface TextContentProps {
  data: TextMessage;
  isOwner: boolean;
}

export const TextContent: React.FC<TextContentProps> = React.memo(({ data, isOwner }) => {
  const [isEdited, setIsEdited] = useState(false);

  const handleClose = () => {
    setIsEdited(false);
  };
  const handleOpen = () => {
    setIsEdited(true);
  };

  return (
    <>
      <StyledTextContent isOwner={isOwner} isEdited={isEdited}>
        {data.updatedAt && (
          <StyledModifiedMessage isOwner={isOwner}>
            Modified {data.updatedAt && dayjs(data.updatedAt).fromNow()}
          </StyledModifiedMessage>
        )}
        <Title white={isOwner}>{data.author.name}</Title>
        <Text white={isOwner}>{data.text}</Text>
      </StyledTextContent>
      {isEdited ? (
        <TextContentEdit data={data} handleClose={handleClose} />
      ) : (
        <MessageFooter data={data} isOwner={isOwner} onEdit={handleOpen} />
      )}
    </>
  );
});
