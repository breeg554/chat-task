import React from "react";
import { Text } from "../..";
import { FileMessage } from "../../../types";
import { ImagePreview, StyledFileContent, StyledFileDescription } from "./style";

interface FileContentProps {
  data: FileMessage;
  isOwner: boolean;
}

export const FileContent: React.FC<FileContentProps> = React.memo(({ data, isOwner }) => {
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
          <Text white={isOwner}>{data.description}</Text>
        </StyledFileDescription>
      )}
    </>
  );
});
