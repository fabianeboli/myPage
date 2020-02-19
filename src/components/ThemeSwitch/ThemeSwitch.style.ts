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
    float: right;
    position: relative;
    bottom: 3vh;
    right: 2vw;
`;

export const lightBulbOff = styled(faLightBulbOff)`
    ${lightBulb};
    background-color: ${p => p.theme.background};
`;

export const lightBulbOn = styled(faLightBulbOn)`
    ${lightBulb};
    background-color: ${p => p.theme.background};
    color: orange;
`;
