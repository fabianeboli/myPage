import Particles from 'react-particles-js';
import styled, { DefaultTheme, createGlobalStyle, keyframes } from 'styled-components';

export const theme: DefaultTheme = {
    background: '#fffffe',
    headline: '#272343',
    paragraph: '#2d334a',
    button: '#ffd803',
    buttonText: '#272343',
    shadow: '#ccc'
};

 const wave = keyframes`
    from {
        background-position: 0px 0px, 0px 0px;
    }
    to {
        background-position: 10000000px 0px, 0px 0px;

    }
`;

export const GlobalStyle = createGlobalStyle`
    html, body {
        @import url('https://fonts.googleapis.com/css?family=MontSerrat:700|Lato:700|Noto+Sans&display=swap');
        width: 100%;
        height: 100%;
        font-family: 'Noto Sans', sans-serif; 
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1055' height='126.6' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23047da4' stroke-width='27' stroke-opacity='0.1'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E"),        
        linear-gradient(to right, #004e92, #000428);
        /* background by SVGBackgrounds.com */
        /* background-image:    linear-gradient(to right, #004e92, #000428); */
        animation: ${wave} 200000s linear infinite;
        background-attachment: fixed;
        background-position: center;
        
    }
`;

export const particles = styled(Particles)`
	position: fixed;
	display: inline-block;
	width: 100vw;
	height: 90vh;
`;

