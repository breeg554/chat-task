export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  author: User;
  createdAt: number;
  updatedAt?: number;
}
export interface TextMessage extends Message {
  text: string;
}
export interface FileMessage extends Message {
  files: File[];
  description: string | null;
}

export const isFileMessage = (message: TextMessage | FileMessage): message is FileMessage => {
  return (message as FileMessage).files !== undefined;
};
export const isFile = (file: File | string): file is File => {
  return (file as File).type !== undefined;
};
