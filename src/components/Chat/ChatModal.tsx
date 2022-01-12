import React from "react";
import { FaTrash } from "react-icons/fa";
import { IconButton, Modal } from "..";
import { CloseButton } from "../Modal/style";
import { ChatModalGrid, ChatModalImgPreview } from "./style";

interface ChatModalProps {
  handleClose: () => void;
  files: File[] | null;
  handleRemoveFile: (lastModified: number) => void;
  render?: () => React.ReactNode;
}

export const ChatModal: React.FC<ChatModalProps> = ({
  files,
  handleClose,
  handleRemoveFile,
  render,
}) => {
  return (
    <Modal onClose={handleClose} visible={files ? true : false}>
      {files && (
        <ChatModalGrid>
          {files.map((file: File, key) => (
            <ChatModalImgPreview key={key}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <CloseButton>
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => handleRemoveFile(file.lastModified)}
                />
              </CloseButton>
            </ChatModalImgPreview>
          ))}
        </ChatModalGrid>
      )}

      {render && render()}
    </Modal>
  );
};
