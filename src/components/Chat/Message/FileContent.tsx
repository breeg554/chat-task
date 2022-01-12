import "react-medium-image-zoom/dist/styles.css";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import { MessageFooter, FileContentEdit } from ".";
import { Text } from "../..";
import { FileMessage, isFile } from "../../../types";
import { ImagePreview, StyledFileContent, StyledFileDescription, StyledImage, StyledModifiedMessage } from "./style";

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
            <Zoom zoomMargin={40}>
              {/*only for display hard coded images that are not File type*/}
              <StyledImage src={isFile(file) ? URL.createObjectURL(file) : file} alt={file.name} />
            </Zoom>
          </ImagePreview>
        ))}
      </StyledFileContent>
      {data.description && (
        <StyledFileDescription isOwner={isOwner}>
          {data.updatedAt && <StyledModifiedMessage isOwner={isOwner}>Modified</StyledModifiedMessage>}
          <Text white={isOwner}>{data.description}</Text>
        </StyledFileDescription>
      )}
      {isEdited && <FileContentEdit data={data} handleClose={handleClose} />}
      <MessageFooter data={data} isOwner={isOwner} onEdit={handleOpen} />
    </>
  );
});
