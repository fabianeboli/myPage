import styled, { keyframes } from 'styled-components';
import { Spinner9 } from '@styled-icons/icomoon/Spinner9';

const animationWave = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const loadingIcon = styled(Spinner9)`
    margin: 0 auto;
    width: 25vw;
    height: 25vh;
    left: 50%;
    top: 50%;
    animation: ${animationWave} 4s linear infinite;
    color: #004e92;
 

`;

export const wrapper = styled.div`
    width: 99.11vw;
    display: flex;
    min-height: 100vh;
    align-items: center;
    background-color: #000428;
   
`;

