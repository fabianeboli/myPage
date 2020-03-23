import styled from 'styled-components';

export const projectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    
    margin: 10vh auto;
    flex: auto;
    
    @media only screen and (min-width: calc(${p => p.theme.nonMobilePx} - 400px)) {
        flex-direction: row;

    }
`;
