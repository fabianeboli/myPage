import styled from 'styled-components';

export const container = styled.div`
	/* border-left: 4px solid ${p => p.theme.headline}; */
	margin: 5% 2%;
	font-size: calc(0.8em + 0.5vw);
	display: flex;
	flex-direction: column;
	text-align: center;
    justify-content: center;
	box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);
    flex-grow: 0;
    flex-basis: 25%;

	& div:first-of-type {
		display: flex;
		align-items: flex-start;
		color: ${p => p.theme.headline};
	}

	& button {
        border: none;
        max-width: 100%;
		font-weight: bold;
        border-radius: 2px;
        padding: 5px;
		font-size: 1.1em;
		color:  ${p => p.theme.buttonText};
        background-image: ${p => p.theme.gradientButton};
        text-shadow: 1px 0px 2px black;
        appearance: none;
        margin: 0.375em;
        transition: 0.3s ease;
	}

	& button:hover{
		box-shadow: 2px 4px 6px ${p => p.theme.shadow};
        cursor: pointer;
	}
`;

export const image = styled.div<{ image: string }>`
    background-image: url(${p => p.image});
    font-size: calc(1em + 0.7vw);
    height: 12vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const description = styled.p`
    font-size: 1.0em;
    color: ${p => p.theme.paragraph};
`;

export const title = styled.h2`
    /* text-align: center; */
    font-weight: bold;
    font-size: 1.7em;
    margin: 1% 5px;
    color: ${p => p.theme.headline};
    /* text-shadow: 1px 1px 1px ${p => p.theme.shadow}; */
`;

export const projectDetails = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    flex-direction: column;
    color: ${p => p.theme.paragraph};
`;

export const link = styled.a`
    text-decoration: none;
    color: ${p => p.theme.buttonText};
    font-weight: bold;
    text-align: center;
    margin: 0 auto;

    &:hover,
    &:active {
        text-decoration: underline;
    }
`;

