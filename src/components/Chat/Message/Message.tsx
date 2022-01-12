import React from "react";
import { Avatar } from "../..";
import { FileMessage, isFileMessage, TextMessage } from "../../../types";
import { FileContent, TextContent } from ".";
import { StyledMessage } from "./style";

interface MessageProps {
  data: TextMessage | FileMessage;
  isOwner: boolean;
}

export const Message: React.FC<MessageProps> = React.memo(({ data, isOwner }) => {
  return (
    <StyledMessage isOwner={isOwner}>
      <div className="avatar-wrapper">
        <Avatar url={data.author.avatar} size="sm" name={data.author.name} />
      </div>
      <div className="content-wrapper">
        {isFileMessage(data) ? (
          <FileContent data={data} isOwner={isOwner} />
        ) : (
          <TextContent data={data} isOwner={isOwner} />
        )}
      </div>
    </StyledMessage>
  );
});
