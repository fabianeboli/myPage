import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${p => p.theme.headline};
    text-shadow: 2px 2px 1px ${p => p.theme.shadow};
`;

export const showcaseContainer = styled.div`
    text-align: center;
    font-family: 'Lato', sans-serif;
    /* margin: 15% auto; */
    /* max-width: 25vw; */
    font-size: calc(1.2em + 1.1vw);
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

export const mail = styled.h4`
    font-family: 'Lato', sans-serif;
    margin: 2% auto;
`;

export const link = styled.a`
    font-family: 'Lato', sans-serif;
    color: ${p => p.theme.headline};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: ${p => p.theme.button};
    }
`;
