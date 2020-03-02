import Particles from 'react-particles-js';
import styled, { DefaultTheme, createGlobalStyle, keyframes } from 'styled-components';
import backgroundImg from '../images/Background/Screenshot_2020-02-25 CodePen - SVG Gradient Wave Generator(1).png';
export const theme: DefaultTheme = {
    background: '#FFFDF1',
    headline: '#272343',
    paragraph: '#545866',
    button: '#ffd803',
    buttonText: '#fff',
    shadow: '#ccc',
    gradient: `linear-gradient(to bottom right, #004e9255, #000428aa), url('${backgroundImg}')`,
    gradientButton: 'linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673)',
    buttonShadow: 'rgba(23, 168, 108, 0.75)',
    overlayGradientBackground: 'linear-gradient(to bottom, #004e92,#fffffe);',
    nonMobilePx: '1025px',
    cardShadow: ` 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);`,
    backgroundSize: `125% 115%`
};

export const darkTheme: DefaultTheme = {
    background: '#0F111A',
    headline: '#0ff',
    paragraph: '#fff',
    button: '#ffd803',
    buttonText: '#fff',
    shadow: '#000',
    gradient: `linear-gradient(to bottom right, #2b587677, #4e4376aa)`,
    gradientButton: 'linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673)',
    buttonShadow: 'rgba(23, 168, 108, 0.75)',
    overlayGradientBackground: 'linear-gradient(to bottom, #004e92,#fffffe);',
    nonMobilePx: '1025px',
    cardShadow: ` 0px 2px 1px -1px rgba(0,0,0,1),
    0px 1px 1px 0px rgba(0,0,0,0.94),
    0px 1px 3px 0px rgba(0,0,0,0.92);`,
    backgroundSize: `450% 450%`
    
};

const wave = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 30%;
    }
    100% {
        background-position: 0% 0%;
    }
`;


export const GlobalStyle = createGlobalStyle`
    html, body {
        @import url('https://fonts.googleapis.com/css?family=MontSerrat:700|Lato:700|Noto+Sans&display=swap');
        width: 100vw;
        height: 100vh;
        font-family: 'Noto Sans', sans-serif; 
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background-image: ${p => p.theme.gradient};
        background-size: ${p => p.theme.backgroundSize};
        background-attachment: fixed;
        background-position: center;
        animation: ${wave} 25s ease-in-out infinite;
        scroll-behavior: smooth;
        margin: 0;
    }
`;

export const particles = styled(Particles)`
    position: fixed;
    display: inline-block;
    width: 100vw;
    height: 90vh;
`;
