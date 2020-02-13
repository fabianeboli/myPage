import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  lightTheme: {
    foreground: "#000",
    background: "#fff"
  }
};

export const GlobalStyle = createGlobalStyle`
    html, body {
        @import url('https://fonts.googleapis.com/css?family=MontSerrat:700|Lato:700|Noto+Sans&display=swap');
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: 'Noto Sans', sans-serif; 
    
    }
`;
