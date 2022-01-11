import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../lib/styled";
import { MainLayout } from "../components";

interface AppProviderProps {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  );
};
