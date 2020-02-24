import styled from 'styled-components';




export const container = styled.div`
    width: 90vw;
    margin: 3% auto 0 auto;
    z-index: 100;
    background-color: ${p => p.theme.background};
    /* background-image: ${p => p.theme.overlayGradientBackground}; */
    border-radius: 2px;
    /* border: 3px solid ${p => p.theme.headline}; */
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5),
    0px 0px 15px rgba(0,0,0,0.15);
    position: sticky;

    @media only screen and (min-width: 1000px) {
        max-width: 65vw !important;
    }
`