import { theme } from './../Theme.style';
import styled, { StyledComponent } from 'styled-components';
import { LightBulb as faLightBulbOff } from 'styled-icons/octicons/LightBulb';
import { Lightbulb as faLightBulbOn } from 'styled-icons/fa-solid/Lightbulb';
import { StyledIcon } from 'styled-icons/types';

const lightBulb = `
    transform: rotate(180deg);
    cursor: pointer;
    padding: 10px;
    border-radius: 40px;
    border: none;
    float: right;
    position: relative;
    bottom: 1vh;
    right: 3vw;
    z-index: 1000;
`;

export const lightBulbOff = styled(faLightBulbOff)`
    ${lightBulb};
    background-color: ${p => p.theme.background};

    &:hover {
        color: ${p => p.theme.button}; 
    }
`;

export const lightBulbOn = styled(faLightBulbOn)`
    ${lightBulb};
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.button + '32'};
    background-image: radial-gradient(rgba(255,216,3,0.8),rgba(255,216,3,0.1) );
    box-shadow: 0px 0px 10px rgba(255,216,3,0.9),
    0px 0px 80px 10px rgba(255,216,3,0.85),
    0px 0px 35px rgba(255,216,3,0.55) inset;
`;
