import { useEffect, useRef } from "react";
import { useMessages } from "../../context/messages";
import { Message } from "./Message";
import { User } from "../../types";
import { sortMessages } from "../../utils";
import { NoMoreMessages, StyledChatBody } from "./style";

interface ChatBodyProps {
  currentUser: User;
}

export const ChatBody: React.FC<ChatBodyProps> = ({ currentUser }) => {
  const scrollIntoRef = useRef<null | HTMLDivElement>(null);
  const { messages } = useMessages();

  useEffect(() => {
    if (!scrollIntoRef.current) return;
    scrollIntoRef.current.scrollIntoView();
  }, [messages]);
  return (
    <StyledChatBody>
      <div ref={scrollIntoRef} />
      {sortMessages(messages).map((msg) => (
        <Message data={msg} key={msg.id} isOwner={currentUser.id === msg.author.id} />
      ))}
      <NoMoreMessages>No more messages...</NoMoreMessages>
    </StyledChatBody>
  );
};
