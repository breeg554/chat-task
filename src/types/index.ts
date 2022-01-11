export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  author: User;
  createdAt: number;
}
export interface TextMessage extends Message {
  text: string;
}
export interface FileMessage extends Message {
  file: string;
  description: string;
}

export const isFileMessage = (
  message: TextMessage | FileMessage
): message is FileMessage => {
  return (message as FileMessage).file !== undefined;
};
