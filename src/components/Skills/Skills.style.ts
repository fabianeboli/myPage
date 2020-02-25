import styled from 'styled-components';

export const container = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
    /* border-radius: 35px; */
    /* border: 3px solid ${p => p.theme.headline}; */
    border: none;
    box-shadow: ${p => p.theme.cardShadow};
    margin: 0 5%;
    position: relative;
    top: 10%;
    

    & legend {
        margin: 1% auto;
        font-size: calc(2em + 0.5vw);
    }

    & div {
        flex: 1 calc(2.0em + 4.0vw);
        min-width: 0;
        
    }

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        right: 1%;

    }
`;
