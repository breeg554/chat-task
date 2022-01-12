import React, { useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { useMessages } from "../../context/messages";
import { IconButton, TextButton, ChatInput, ChatModal } from "..";
import { isMessageFileValid } from "../../utils";
import { FileMessage, TextMessage, User } from "../../types";
import { ChatModalActionWrapper, StyledChatFooter } from "./style";

interface ChatFooterProps {
  currentUser: User;
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ currentUser }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { sendMessage } = useMessages();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [files, setFiles] = useState<File[] | null>(null);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOpen = () => {
    if (ref.current) ref.current.click();
    setIsOpen(true);
  };
  const handleClear = () => {
    setValue("");
    setFiles(null);
  };
  const handleClose = () => {
    setIsOpen(false);
    handleClear();
  };

  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return setFiles(null);

    const filtered = [...e.target.files].filter((file) => {
      if (isMessageFileValid(file)) return true;
      alert("File size must be under 1MiB. Allowed file types are png, jpeg and jpg");
      return false;
    });

    if (filtered.length === 0) return handleClose();

    setFiles([...filtered]);
  };

  const handleRemoveFile = (lastModified: number) => {
    if (!files) return;

    const filtered = [...files].filter((file) => file.lastModified !== lastModified);

    if (filtered.length === 0) return handleClose();

    setFiles(filtered);
  };

  const handleCreateMsg = () => {
    if (!files && !value.trim()) return handleClear();
    let newMessage: FileMessage | TextMessage;

    if (files) {
      newMessage = {
        id: Date.now(),
        author: currentUser,
        createdAt: Date.now(),
        files: files,
        description: value,
      };
    } else {
      newMessage = {
        id: Date.now(),
        author: currentUser,
        createdAt: Date.now(),
        text: value,
      };
    }
    sendMessage(newMessage);
    handleClose();
  };

  return (
    <StyledChatFooter>
      <IconButton icon={<FaImages />} size="md" circle onClick={handleOpen} />
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        multiple
        ref={ref}
        style={{ display: "none" }}
        onChange={handleChangeFiles}
      />
      <ChatInput value={value} onChange={handleChangeValue} onEnter={handleCreateMsg} />

      <IconButton
        icon={<FiChevronRight />}
        circle
        variant="primary"
        size="md"
        onClick={handleCreateMsg}
      />
      {isOpen && (
        <ChatModal
          handleClose={handleClose}
          handleRemoveFile={handleRemoveFile}
          files={files}
          render={() => (
            <>
              <ChatInput
                value={value}
                onChange={handleChangeValue}
                onEnter={handleCreateMsg}
                fullSize
              />

              <ChatModalActionWrapper>
                <TextButton onClick={handleClose}>Cancel</TextButton>
                <TextButton onClick={handleCreateMsg}>Send</TextButton>
              </ChatModalActionWrapper>
            </>
          )}
        />
      )}
    </StyledChatFooter>
  );
};
