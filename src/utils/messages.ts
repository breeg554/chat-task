import { FileMessage, TextMessage } from "../types";

export const sortMessages = (messages: (TextMessage | FileMessage)[]) => {
  return [...messages].sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
  });
};
