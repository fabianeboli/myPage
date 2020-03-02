import styled from 'styled-components';
import { Language } from 'styled-icons/entypo/Language';

export const languageIcon = styled(Language)`
    color: white;
`;

export const container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const flags = styled.div`
    display: flex;
    justify-content: space-evenly;
    visibility: hidden;
    transition: visibility 0.45s ease-in-out;
    cursor: pointer;
`;

export const inner = styled.div`
    position: absolute;
    height: 10vh;
    background: hsl(100.27deg, 55.37%, 47.45%);
    padding: 5px;
    width: calc(8.0rem + 17.9vw);
    clip-path: circle(calc(2.6rem + 1.1vw) at 0% 0%);
    transition: all 0.5s ease-in-out;
    box-shadow: ${p => p.theme.cardShadow};
    /* hsla(​184.41deg, 61.82%, ​ 21.57%)*/

    & img {
        width: 5vw;
        height: 5vh;
        margin: 0;
    }

    &:hover {
        clip-path: circle(75%);
        background: hsl(184.27deg, 71.37%, 37.45%);
        border-radius: 2px;
        height: 5vh;
    }

     &:hover ${flags} {
        visibility: visible;
       
    }

    & span {
        float: left;
        position: relative;
        left: 0.2vw;
        top: 0.5vh;
    }
`;
