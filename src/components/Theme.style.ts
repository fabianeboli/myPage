import Particles from 'react-particles-js';
import styled, { DefaultTheme, createGlobalStyle, keyframes } from 'styled-components';
import backgroundImg from '../../public/images/Background/Screenshot_2020-02-25 CodePen - SVG Gradient Wave Generator(1).png';
export const theme: DefaultTheme = {
    background: '#fafaFF',
    headline: '#272343',
    paragraph: '#545866',
    button: '#ffd803',
    buttonText: '#fff',
    shadow: '#ccc',
    gradient: `linear-gradient(to bottom right, #004e9250, #000428aa), url('${backgroundImg}')`,
    gradientButton: 'linear-gradient(to right, #005566, #3c9f72, #55a970, #006a70)',
	gradientProfession: `linear-gradient(to bottom right, #ffd803,#55a970 50%, #005566 90% )`,
	buttonShadow: '#008074aa',
    overlayGradientBackground: 'linear-gradient(to bottom, #004e92,#fffffe);',
    nonMobilePx: '1025px',
    cardShadow: ` 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);`,
    backgroundSize: `125% 115%`,
};

export const darkTheme: DefaultTheme = {
    background: '#0F111A',
    headline: '#0ff',
    paragraph: '#fff',
    button: '#ffd803',
    buttonText: '#fff',
    shadow: '#222',
    gradient: `linear-gradient(to bottom right, #2b587677, #4e4376aa)`,
    gradientButton: 'linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673)',
	gradientProfession: `linear-gradient(to bottom right, #ffd803, #55a970)`,
	buttonShadow: 'rgba(23, 168, 108, 0.75)',
    overlayGradientBackground: 'linear-gradient(to bottom, #004e92,#fffffe);',
    nonMobilePx: '1025px',
    cardShadow: ` 0px 2px 1px -1px rgba(0,0,0,1),
    0px 1px 1px 0px rgba(0,0,0,0.94),
    0px 1px 3px 0px rgba(0,0,0,0.92);`,
    backgroundSize: `175% 175%`,
};

const wave = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 25% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	src:
		local('Lato'),
		local('Lato-Regular'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2 */
		url('/fonts/Lato_400.woff2') format('woff2'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWA.woff */
		url('/fonts/Lato_400.woff') format('woff'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWg.eot */
		url('/fonts/Lato_400.eot?#iefix') format('embedded-opentype'),
		/* from https://fonts.gstatic.com/l/font?kit=S6uyw4BMUTPHjx4wWQ&skey=2d58b92a99e1c086&v=v16#Lato */
		url('/fonts/Lato_400.svg#Lato') format('svg'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf */
		url('/fonts/Lato_400.ttf') format('truetype');
}
@font-face {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	src:
		local('Lato Bold'),
		local('Lato-Bold'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPGQ.woff2 */
		url('/fonts/Lato_700.woff2') format('woff2'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHw.woff */
		url('/fonts/Lato_700.woff') format('woff'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHQ.eot */
		url('/fonts/Lato_700.eot?#iefix') format('embedded-opentype'),
		/* from https://fonts.gstatic.com/l/font?kit=S6u9w4BMUTPHh6UVSwiPHg&skey=3480a19627739c0d&v=v16#Lato */
		url('/fonts/Lato_700.svg#Lato') format('svg'),
		/* from https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf */
		url('/fonts/Lato_700.ttf') format('truetype');
}
@font-face {
	font-family: 'Noto Sans';
	font-style: normal;
	font-weight: 400;
	src:
		local('Noto Sans'),
		local('NotoSans'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr5TRA.woff2 */
		url('/fonts/Noto_Sans_400.woff2') format('woff2'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr5TRG.woff */
		url('/fonts/Noto_Sans_400.woff') format('woff'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr5TRE.eot */
		url('/fonts/Noto_Sans_400.eot?#iefix') format('embedded-opentype'),
		/* from https://fonts.gstatic.com/l/font?kit=o-0IIpQlx3QUlC5A4PNr5TRH&skey=2b960fe17823056f&v=v9#NotoSans */
		url('/fonts/Noto_Sans_400.svg#NotoSans') format('svg'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr5TRF.ttf */
		url('/fonts/Noto_Sans_400.ttf') format('truetype');
}
@font-face {
	font-family: 'Noto Sans';
	font-style: normal;
	font-weight: 700;
	src:
		local('Noto Sans Bold'),
		local('NotoSans-Bold'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyB.woff2 */
		url('/fonts/Noto_Sans_700&display=swap.woff2') format('woff2'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyH.woff */
		url('/fonts/Noto_Sans_700&display=swap.woff') format('woff'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyF.eot */
		url('/fonts/Noto_Sans_700&display=swap.eot?#iefix') format('embedded-opentype'),
		/* from https://fonts.gstatic.com/l/font?kit=o-0NIpQlx3QUlC5A4PNjXhFVZNyG&skey=c04743c8f0416da6&v=v9#NotoSans */
		url('/fonts/Noto_Sans_700&display=swap.svg#NotoSans') format('svg'),
		/* from https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyE.ttf */
		url('/fonts/Noto_Sans_700&display=swap.ttf') format('truetype');
} 

       /* @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans:400&display=swap'); */

    html, body {
		box-sizing: border-box;
        width: 100vw;
        font-family: 'Noto Sans', sans-serif; 
        background: #000428;  /* fallback for old browsers */
        background-image: ${p => p.theme.gradient};
        background-size: ${p => p.theme.backgroundSize};
        background-attachment: fixed;
        background-position: center;
        scroll-behavior: smooth;
        scrollbar-color: #0c7d9d #0c7d9d55;
		margin: 0 auto;
		overflow-x: hidden;
		animation: ${fadeIn} 1s ease-in;
	
		@media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        	animation: ${fadeIn} 1s ease-in, ${wave} 25s ease-out infinite;
		}
    }

	header {
	}

`;

export const particles = styled(Particles)`
    position: fixed;
    display: inline-block;
    width: 100vw;
    height: 90vh;
`;
