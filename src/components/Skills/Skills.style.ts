import styled from 'styled-components';

export const container = styled.fieldset`
    display: flex;
    border: 3px solid ${p => p.theme.headline};
    margin: 1em 0;
    border-radius: 35px;
    box-shadow: 1px 1px 2px ${p => p.theme.shadow};
    & legend {
        margin: 5% auto;
        font-size: calc(2em + 0.5vw);
    }

    & div {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 0 0.7em;

        & img {
            margin: 0.7rem;
        }
    }
`;
