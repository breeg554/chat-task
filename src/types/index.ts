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
  files: File[];
  description: string | null;
}

export const isFileMessage = (
  message: TextMessage | FileMessage
): message is FileMessage => {
  return (message as FileMessage).files !== undefined;
};
