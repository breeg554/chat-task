import React, { createContext, useContext, useState } from "react";
import { User } from "../types";
import { dummyUsers } from "./dummyData";

interface UsersProviderProps {
  children: React.ReactNode;
}

interface Context {
  users: { current: User; member: User };
  toggleUsers: () => void;
}
const UsersContext = createContext<Context>(null!);

export const useUsers = () => useContext(UsersContext);

const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState({ ...dummyUsers });

  const toggleUsers = () => {
    setUsers({ current: { ...users.member }, member: { ...users.current } });
  };
  return (
    <UsersContext.Provider value={{ users, toggleUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
