import React from "react";
import { StyledChatInput } from "./style";

interface ChatInputProps {
  onEnter?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullSize?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onEnter,
  value,
  onChange,
  fullSize = false,
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.shiftKey || e.key !== "Enter") return;
    e.preventDefault();
    if (onEnter) onEnter();
  };
  return (
    <StyledChatInput
      placeholder="Message..."
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      fullSize={fullSize}
    />
  );
};
