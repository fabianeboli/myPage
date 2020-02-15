import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const theme: DefaultTheme = {
	lightTheme: {
		foreground: '#000',
		background: '#fff',
	},
};

export const GlobalStyle = createGlobalStyle`
    html, body {
        @import url('https://fonts.googleapis.com/css?family=MontSerrat:700|Lato:700|Noto+Sans&display=swap');
        width: 100%;
        height: 100%;
        font-family: 'Noto Sans', sans-serif; 
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        
    }
`;
