import { FileMessage, TextMessage } from "../types";

export const sortMessages = (messages: (TextMessage | FileMessage)[]) => {
  return [...messages].sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
  });
};

export const isMessageFileValid = (file: File) => {
  //1MiB

  if (file.size > 1048576) return false;
  if (
    file.type !== "image/png" &&
    file.type !== "image/jpeg" &&
    file.type !== "image/jpg"
  )
    return false;
  return true;
};
