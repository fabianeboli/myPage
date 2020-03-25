import styled from 'styled-components';

export const container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,1fr);
    grid-template-rows: 2vh repeat(2, 1fr);
    justify-items: center;
    align-content: center;
    padding-bottom: 0.5vh;

    box-shadow: ${p => p.theme.cardShadow};
    margin: 10vh 2%;
    top: 10%;
    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        right: 1%;
    }
`;

export const title = styled.div`
    grid-area: 1 / 1 / 1 / 7;
    margin: 0 auto;
    position: relative;
    bottom: 30px;
    color: ${p => p.theme.headline};
    font-size: calc(2em + 0.5vw);
    flex: 10 50% 50%;
`;
