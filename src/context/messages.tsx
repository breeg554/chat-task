import React, { createContext, useContext, useState } from "react";
import { TextMessage, FileMessage } from "../types";
import { dummyMessages } from "./dummyData";

interface MessagesProviderProps {
  children: React.ReactNode;
}
interface Context {
  messages: (TextMessage | FileMessage)[];
  sendMessage: (newMsg: TextMessage | FileMessage) => void;
  removeMessage: (id: number) => void;
}

const MessagesContext = createContext<Context>(null!);
export const useMessages = () => useContext(MessagesContext);

const MessagesProvider = ({ children }: MessagesProviderProps) => {
  const [messages, setMessages] = useState<(TextMessage | FileMessage)[]>([
    ...dummyMessages,
  ]);

  const sendMessage = (newMsg: TextMessage | FileMessage) => {
    setMessages([...messages, newMsg]);
  };
  const removeMessage = (id: number) => {
    setMessages([...messages].filter((msg) => msg.id !== id));
  };
  return (
    <MessagesContext.Provider value={{ messages, sendMessage, removeMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
