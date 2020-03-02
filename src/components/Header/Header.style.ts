import { theme } from './../Theme.style';
import styled from 'styled-components';
import { Github } from 'styled-icons/fa-brands/Github';
import background from '../../images/Header/Workspace_2_SVG.svg';
export const container = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    color: ${p => p.theme.headline};
    text-shadow: 2px 2px 1px ${p => p.theme.shadow};
    padding: 3vh 0 10vh 0;
    background-size: cover;
    

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        flex-direction: row;
        justify-content: space-around;
        
    }
`;

export const headerContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`

export const backgroundContainer = styled.div`
    /* position: relative; */
    /* left: 1.0vw; */
`

export const backgroundImage = styled.img`
    z-index: -1;
    max-width: 100%;
    width: 0vw;
    background-size: contain;
    height: auto;

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        width: 35vw;
;
        
    }
    
`

export const showcaseContainer = styled.div`
    
    text-align: center;
    font-family: 'Lato', sans-serif;
    /* margin: 15% auto; */
    /* max-width: 25vw; */
    font-size: calc(1.2em + 1.3vw);
    bottom: 9%;

    @media only screen and (min-width: ${p => p.theme.nonMobilePx}) {
        flex-direction: row;
    }
`;

export const nameContainer = styled.div`
    border-bottom: 2px solid ${p => p.theme.headline};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: baseline;
    align-items: center;
`;

export const name = styled.h1`
    margin: 2% auto;
`;
export const title = styled.h3`
    font-family: 'Lato', sans-serif;
    margin: 2% auto;

    & span {
        color: ${p => p.theme.button};
    }
`;

export const contact = styled.h4`
    font-family: 'Lato', sans-serif;
    margin: 2% auto;
    display: flex;
`;

export const github = styled(Github)``;

export const link = styled.a`
    font-family: 'Lato', sans-serif;
    color: ${p => p.theme.headline};
    text-decoration: none;
    transition: 0.1s linear;
    padding: 0 5px;
    &:hover {
        text-decoration: underline;
        color: ${p => p.theme.button};
    }
`;
