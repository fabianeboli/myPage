import styled, { keyframes }  from 'styled-components';

const animationWave = keyframes`
 0% {    
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

`

export const wrapper = styled.div`
  width:100%;
  display:flex;
  background: #005566;
  min-height:100vh;
  align-items: center;

`

export const wave = styled.div`
  display: block;
  position: absolute;
  width: 70px;
  height: 70px;
  left:50%; 
  top:50%; 
  transform: translate(-50%, - 50%);
  overflow: visible;

  &::before &::after {
    position: absolute;
  content: '';
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  left:50%; 
  top:50%; 
  transform: translate(-55%, - 55%);
  animation: ${animationWave} 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &::after {
    animation-delay: -0.4s;
  }
`