import styled, { keyframes } from 'styled-components';
import { ArrowWithCircleDown } from 'styled-icons/entypo/ArrowWithCircleDown';

const hangAnimation = keyframes`
   10% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  50% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
  90% {
 -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
}
 `;


export const link = styled.a`
    break-after: always;
    width: 100%;
    text-align: center;
    outline: none;

`


export const ArrowIcon = styled(ArrowWithCircleDown)`
    color: ${p => p.theme.button};
    position: relative;
    top: 10vh;
    opacity: 0.5;
    border: transparent;
    transition: opacity 0.7s;
    &:hover {
        cursor: pointer;
        animation: ${hangAnimation} 1s ease-in infinite;
        opacity: 1;
    }

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        top: 5vh !important;
    }
`;
