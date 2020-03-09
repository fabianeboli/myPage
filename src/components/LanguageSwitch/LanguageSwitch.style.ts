import styled from 'styled-components';
import { Language } from 'styled-icons/entypo/Language';

export const languageIcon = styled(Language)`
    color: white;
`;

export const container = styled.div``;

export const flags = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    visibility: hidden;
    transition: visibility 0.45s ease-in-out;
    cursor: pointer;
`;

export const flag = styled.img`
    width: calc(2.5rem + 1.6vw);
    height: calc(2rem + 1.5vh);
    margin: 0;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.2s;
    }

    &:active {
        transform: scale(0.9);
        transition-duration: 0.1s;
    }
`;

export const inner = styled.div`
    position: absolute;
    height: 10vh;
    background: hsl(100.27deg, 55.37%, 47.45%);
    width: calc(5rem + 35.9vw);
    padding: 0.4vh 0;
    clip-path: circle(calc(2.6rem + 1.1vw) at 0% 0%);
    transition: all 0.5s ease-in-out;
    box-shadow: ${p => p.theme.cardShadow};

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        width: calc(5rem + 15.9vw);
    }

   

    &:hover,
    &:active {
        clip-path: circle(75%);
        background: hsl(201, 50.21%, 44.5%);
        border-radius: 2px;
        height: calc(1rem + 3vh);
    }

    &:hover ${flags} {
        visibility: visible;
    }

    & span {
        float: left;
        position: relative;
        left: 0.33vw;
        top: 0.5vh;
    }
`;
