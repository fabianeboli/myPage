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

export const container = styled.div`

		
`;

export const inner = styled.div`
    background: rgb(9, 201, 153);
    padding: 1em;
    border-radius: 10px;
    width: 250px;
    clip-path: circle(10% at 90% 20%);
    transition: all 0.5s ease-in-out;

    & p {
    }

		&:hover {
        clip-path: circle(75%);
        background: #00B6FF;
    }
`;

export const ArrowIcon = styled(ArrowDropDownCircle)`
    color: ${p => p.theme.button};
    position: relative;
    top: 5vh;
    opacity: 0.7;
    transition: opacity 0.7s;


    &:hover {
        cursor: pointer;
        animation: ${hangAnimation} 1s ease-in infinite;
        opacity: 1;
    }

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        top: 30vh !important;
    }
`;
