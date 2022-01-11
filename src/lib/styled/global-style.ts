import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,input{
    font-family: 'Roboto', sans-serif;
    font-size: 10px;   //1rem = 10px
  }
  body,button,input{
    background-color: #fff;
    color: ${({ theme }) => theme.colors.core.primary}
  }

`;
