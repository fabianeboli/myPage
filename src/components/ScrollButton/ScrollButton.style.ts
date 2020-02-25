import styled, { keyframes } from 'styled-components';
import { ArrowDropDownCircle } from 'styled-icons/material/ArrowDropDownCircle';

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


export const ArrowIcon = styled(ArrowDropDownCircle)`
    color: ${p => p.theme.button};
    position: relative;
    top: 30vh;
    opacity: 0.7;
    transition: opacity 0.7s;

    &:hover {
        cursor: pointer;
        animation: ${hangAnimation} 1s ease-in infinite;
        opacity: 1;
   }

   
`;
