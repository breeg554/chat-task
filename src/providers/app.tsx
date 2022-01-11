import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../lib/styled";
import { MainLayout } from "../components";
import UsersProvider from "../context/users";

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UsersProvider>
        <MainLayout>{children}</MainLayout>
      </UsersProvider>
    </ThemeProvider>
  );
};
