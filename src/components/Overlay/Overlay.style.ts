import styled from 'styled-components';

export const container = styled.div`
    max-width: 62vw;
    margin: 5% auto 0 auto;
    z-index: 100;
    background-color: ${p => p.theme.background};
    border-radius: 6px;
    border: 3px solid ${p => p.theme.headline};
    box-shadow: 0px 0px 5px ${p => p.theme.headline};
`