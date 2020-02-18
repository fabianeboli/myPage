import { theme } from '../../Theme.style';
import styled, { keyframes } from 'styled-components';

const randomColor = () => {
    const colors = [theme.button, theme.headline];
    return colors[Math.floor(Math.random() * colors.length)];
};

const pulse = keyframes`
   0%, 100% { transform: scale(0) rotate(33deg); }
    35%, 65% { transform: scale(1) rotate(0deg); }
`;

const showFirst = keyframes`
    0%, 33% {
    opacity: 1;
    }
     33.0001%, 100% { opacity: 0; }
`;

const showSecond = keyframes`
    33.0001%, 66% {
    opacity: 1;
    }
     0%, 33%, 66.0001%, 100% { opacity: 0; }
}
`;

const showThird = keyframes`
    66.0001%, 99.999% {
    opacity: 1;
    }
    0%, 66%, 100% { opacity: 0; }
`;

const rotate = keyframes`
    0% {transform: rotate(0);}
    100% {transform: rotate(360deg);}
`;

export const wrapper = styled.div`
   width: 100%;
  margin: 0 auto;
`;

export const filledHeading = styled.clipPath`
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    /* font-size: 200em; */
    line-height: 0.9;

    & text:nth-of-type(n + 1):nth-of-type(-n + 3) {
        animation: ${showFirst} 12s infinite;
    }
    & text:nth-of-type(n + 1):nth-of-type(-n + 3) {
        animation: ${showSecond} 12s infinite;
    }
    & text:nth-of-type(n + 1):nth-of-type(-n + 3) {
        animation: ${showThird} 12s infinite;
    }
`;

export const svg = styled.svg`
 
`;

export const path = styled.path`
    animation: ${pulse} 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.1s;
    fill: ${() => randomColor()};
    /* Necessary to keep the SVG objects in place while scaling */
    transform-origin: 50% 50%;
    transform-box: fill-box;
    z-index: -100;

    &:nth-of-type(2n) {
        animation: ${rotate} 20s linear infinite;
    }

    &:nth-of-type(2n + 1) {
        animation: ${rotate} 30s linear infinite;
    }
`;
