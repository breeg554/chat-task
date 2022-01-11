import { FiChevronRight } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { IconButton } from "..";
import { ChatInput, StyledChatFooter } from "./style";
interface ChatFooterProps {}

export const ChatFooter: React.FC<ChatFooterProps> = () => {
  return (
    <StyledChatFooter>
      <IconButton icon={<FaImages />} size="md" circle />
      <ChatInput role="textbox" contentEditable placeholder="Message..." />
      <IconButton icon={<FiChevronRight />} circle variant="primary" size="md" />
    </StyledChatFooter>
  );
};
