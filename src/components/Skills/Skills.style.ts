import styled from 'styled-components';

export const container = styled.fieldset`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 35px;
    border: 3px solid ${p => p.theme.headline};
    margin: 1em 0;
    box-shadow: 1px 1px 2px ${p => p.theme.shadow};
    & legend {
        margin: 5% auto;
        font-size: calc(2em + 0.5vw);
    }

   
`;
