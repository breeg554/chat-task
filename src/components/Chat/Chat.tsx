import { ChatWrapper } from "./style";
import { ChatBody, ChatFooter, ChatHeader } from ".";
import { useUsers } from "../../context/users";

interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
  const { users } = useUsers();
  return (
    <ChatWrapper>
      <ChatHeader user={users.member} />
      <ChatBody />
      <ChatFooter />
    </ChatWrapper>
  );
};
