import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../lib/styled";
import { MainLayout } from "../components";
import UsersProvider from "../context/users";
import MessagesProvider from "../context/messages";

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UsersProvider>
        <MessagesProvider>
          <MainLayout>{children}</MainLayout>
        </MessagesProvider>
      </UsersProvider>
    </ThemeProvider>
  );
};
