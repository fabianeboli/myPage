import styled from 'styled-components';

export const projectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    margin: 10vh 1vw;

    
    @media only screen and (min-width: calc(${p => p.theme.nonMobilePx} - 400px)) {
        flex-direction: row;

    }
`;
