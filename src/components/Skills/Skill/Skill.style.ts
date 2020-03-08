import styled from 'styled-components';

export const container = styled.div`
    text-align: center;
    position: relative;
    flex: 1 calc(2.0em + 4.0vw);
    align-self: center;
    height: auto;
`;

export const skillLogo = styled.img`
    max-width: calc(2.5em + 3.5vw);
    max-height: calc(2.5em + 3.5vh);
    padding: 7px 5px;
    fill: currentColor;
    color: red;
    margin: calc(0.1em + 0.2vw);
`;

export const popup = styled.p`
    position: absolute;
    background-color: ${p => p.theme.headline};
    color: ${p => p.theme.background};
    text-shadow: none;
    padding: 10px;
    border-radius: 10px;
    right: 10px;
    top: 1px;
    transition: 0.15s ease;
    opacity: 0;
    margin: 0;

   ${container}:hover & {
    opacity: 1;

    }
`;
