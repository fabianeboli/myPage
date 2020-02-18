import styled from 'styled-components';

export const container = styled.div`
    flex-basis: 33.33333%;
    flex-grow: 1;
    text-align: center;
    position: relative;
    transition: 1.5s ease;

`;

export const skillLogo = styled.img`
    font-size: calc(0.7em + 0.5vw);
    max-width: calc(2.5em + 1.5vw);
    max-height: calc(2.5em + 1.5vw);
    /* margin: 0 auto; */
    width: 100%;
    margin: calc(0.3em + 0.5vw);
`;

export const popup = styled.p`
    visibility: hidden;
    position: absolute;
    background-color: ${p => p.theme.headline};
    color: ${p => p.theme.background};
    text-shadow: none;
    padding: 10px;
    border-radius: 10px;
    right: 10px;
    top: 1px;
    opacity: 0.95;

   ${container}:hover & {
        visibility: visible;

    }
`;
