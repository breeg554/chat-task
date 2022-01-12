import { useState } from "react";
import { ChatInput } from "..";
import { TextButton } from "../..";
import { useMessages } from "../../../context/messages";
import { TextMessage } from "../../../types";
import { StyledTextContentEdit } from "./style";

interface TextContentEditProps {
  data: TextMessage;
  handleClose: () => void;
}

export const TextContentEdit: React.FC<TextContentEditProps> = ({
  data,
  handleClose,
}) => {
  const { updateMessage } = useMessages();
  const [value, setValue] = useState(data.text);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleUpdate = () => {
    if (!value.trim() || value === data.text) return handleClose();
    const upadted: TextMessage = { ...data, text: value, updatedAt: Date.now() };
    updateMessage(upadted);
    handleClose();
  };
  return (
    <StyledTextContentEdit>
      <ChatInput
        value={value}
        onChange={handleChangeValue}
        onEnter={handleUpdate}
        fullSize
      />

      <div className="site-wrapper">
        <TextButton size="sm" onClick={handleClose}>
          Cancel
        </TextButton>
        <TextButton size="sm" onClick={handleUpdate}>
          Save
        </TextButton>
      </div>
    </StyledTextContentEdit>
  );
};
