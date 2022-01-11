import { FiChevronRight } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { IconButton } from "..";
import { ChatInput, StyledChatFooter } from "./style";
import { useCallback, useState } from "react";
import { useMessages } from "../../context/messages";
import { TextMessage, User } from "../../types";
interface ChatFooterProps {
  currentUser: User;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ currentUser }) => {
  const { sendMessage } = useMessages();
  const [value, setValue] = useState("");

  const handleChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const handleClear = () => {
    setValue("");
  };

  const handleCreateMsg = () => {
    if (!value) return;

    const newMsg: TextMessage = {
      id: Date.now(),
      author: currentUser,
      createdAt: Date.now(),
      text: value,
    };

    sendMessage(newMsg);
    handleClear();
  };
  return (
    <StyledChatFooter>
      <IconButton icon={<FaImages />} size="md" circle />
      <ChatInput placeholder="Message..." value={value} onChange={handleChangeValue} />
      <IconButton
        icon={<FiChevronRight />}
        circle
        variant="primary"
        size="md"
        onClick={handleCreateMsg}
      />
    </StyledChatFooter>
  );
};
