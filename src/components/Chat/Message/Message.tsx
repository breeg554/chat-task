import React from "react";
import dayjs from "../../../lib/dayjs";
import { Avatar, Title, Text } from "../..";
import { FileMessage, isFileMessage, TextMessage } from "../../../types";
import { MessageBtn, MessageContent, MessageFooter, StyledMessage } from "./style";
import { useMessages } from "../../../context/messages";

interface MessageProps {
  data: TextMessage | FileMessage;
  isOwner: boolean;
}

export const Message: React.FC<MessageProps> = React.memo(({ data, isOwner }) => {
  const { removeMessage } = useMessages();
  return (
    <StyledMessage isOwner={isOwner}>
      <div className="avatar-wrapper">
        <Avatar url={data.author.avatar} size="sm" name={data.author.name} />
      </div>
      <div className="content-wrapper">
        <MessageContent isOwner={isOwner}>
          <Title white={isOwner}>{data.author.name}</Title>
          <Text white={isOwner}>{isFileMessage(data) ? "file" : data.text}</Text>
        </MessageContent>
        <MessageFooter>
          <span>{dayjs(data.createdAt).fromNow()}</span>
          {isOwner ? (
            <>
              <MessageBtn>edit</MessageBtn>
              <MessageBtn onClick={() => removeMessage(data.id)}>delete</MessageBtn>
            </>
          ) : null}
        </MessageFooter>
      </div>
    </StyledMessage>
  );
});
