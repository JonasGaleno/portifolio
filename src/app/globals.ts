import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  html, body {
    scroll-behavior: smooth !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
