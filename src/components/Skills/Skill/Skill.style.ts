import styled from 'styled-components';

export const container = styled.div`
    text-align: center;
    position: relative;
    align-self: center;
    height: auto;
    
`;

export const skillLogo = styled.img`
    max-width: calc(2.2em + 3.7vw);
    max-height: calc(2.2em + 3.7vh);
    color: red;
    margin: 0.1vw;
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
