import { useState } from "react";
import { ChatInput, ChatModal, TextButton } from "../..";
import { useMessages } from "../../../context/messages";
import { FileMessage } from "../../../types";
import { ChatModalActionWrapper } from "../style";

interface FileContentEditProps {
  data: FileMessage;
  handleClose: () => void;
}

export const FileContentEdit: React.FC<FileContentEditProps> = ({
  data,
  handleClose,
}) => {
  const { updateMessage, removeMessage } = useMessages();
  const [files, setFiles] = useState<File[]>(data.files);
  const [value, setValue] = useState(data.description);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleRemoveFile = (lastModified: number) => {
    if (!files) return;

    const filtered = [...files].filter((file) => file.lastModified !== lastModified);

    setFiles(filtered);
  };

  const handleUpdate = () => {
    if (files.length === 0) return removeMessage(data.id);
    const upadted: FileMessage = {
      ...data,
      description: value,
      updatedAt: Date.now(),
      files,
    };
    updateMessage(upadted);
    handleClose();
  };
  return (
    <ChatModal
      handleClose={handleClose}
      handleRemoveFile={handleRemoveFile}
      files={files}
      render={() => (
        <>
          <ChatInput
            value={value || ""}
            onChange={handleChangeValue}
            onEnter={handleUpdate}
            fullSize
          />

          <ChatModalActionWrapper>
            <TextButton onClick={handleClose}>Cancel</TextButton>
            <TextButton onClick={handleUpdate}>Save</TextButton>
          </ChatModalActionWrapper>
        </>
      )}
    />
  );
};
