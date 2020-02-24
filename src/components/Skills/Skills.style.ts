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
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);
    margin: 0 10%;
    padding: 15px;
    & legend {
        margin: 1% auto;
        font-size: calc(2em + 0.5vw);
    }

    & div {
        flex: 1 calc(2.0em + 4.0vw);
        min-width: 0;
    }

    @media only screen and (max-width: ${p => p.theme.nonMobilePx}) {
    }
`;
