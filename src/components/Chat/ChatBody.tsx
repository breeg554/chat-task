import { StyledChatBody } from "./style";

interface ChatBodyProps {}

export const ChatBody: React.FC<ChatBodyProps> = () => {
  return (
    <StyledChatBody>
      <p>body</p>
    </StyledChatBody>
  );
};
