import React, { useState } from "react";
import { MessageFooter, FileContentEdit } from ".";
import { Text } from "../..";
import { FileMessage } from "../../../types";
import {
  ImagePreview,
  StyledFileContent,
  StyledFileDescription,
  StyledModifiedMessage,
} from "./style";

interface FileContentProps {
  data: FileMessage;
  isOwner: boolean;
}

export const FileContent: React.FC<FileContentProps> = React.memo(({ data, isOwner }) => {
  const [isEdited, setIsEdited] = useState(false);

  const handleClose = () => {
    setIsEdited(false);
  };
  const handleOpen = () => {
    setIsEdited(true);
  };

  return (
    <>
      <StyledFileContent isOwner={isOwner}>
        {data.files.map((file, index) => (
          <ImagePreview key={index}>
            <img src={URL.createObjectURL(file)} alt={file.name} />
          </ImagePreview>
        ))}
      </StyledFileContent>
      {data.description && (
        <StyledFileDescription isOwner={isOwner}>
          {data.updatedAt && (
            <StyledModifiedMessage isOwner={isOwner}>Modified</StyledModifiedMessage>
          )}
          <Text white={isOwner}>{data.description}</Text>
        </StyledFileDescription>
      )}
      {isEdited && <FileContentEdit data={data} handleClose={handleClose} />}
      <MessageFooter data={data} isOwner={isOwner} onEdit={handleOpen} />
    </>
  );
});
