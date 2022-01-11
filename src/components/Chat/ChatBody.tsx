import { Message } from "..";
import { useMessages } from "../../context/messages";
import { User } from "../../types";
import { sortMessages } from "../../utils";
import { NoMoreMessages, StyledChatBody } from "./style";

interface ChatBodyProps {
  currentUser: User;
}

export const ChatBody: React.FC<ChatBodyProps> = ({ currentUser }) => {
  const { messages } = useMessages();

  return (
    <StyledChatBody>
      {sortMessages(messages).map((msg) => (
        <Message data={msg} key={msg.id} isOwner={currentUser.id === msg.author.id} />
      ))}
      <NoMoreMessages>No more messages...</NoMoreMessages>
    </StyledChatBody>
  );
};
