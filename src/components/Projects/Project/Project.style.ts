import { theme } from './../../Theme.style';
import styled from 'styled-components';

export const container = styled.div`
	border-left: 4px solid ${p => p.theme.headline};
	margin: 5% 1%;
	font-size: calc(0.6em + 0.5vw);
	& * {
		margin-left: 1%;
	}

	& img {
		border-radius: 2px;
		font-size: calc(0.7em + 0.7vw);
	}

	& div:first-of-type {
		display: flex;
		align-items: flex-start;
		color: ${p => p.theme.headline};
	}

	& button {
		/* background-color: transparent;
		border: none; */
        background-color: ${p => p.theme.button};
		font-weight: bold;
        border: 2px solid ${p => p.theme.button};
        border-radius: 4px;
        padding: 5px 15px;
		font-size: 1.5em;
		color: ${p => p.theme.buttonText}
	}

	& button:hover{
		box-shadow: 2px 4px 6px ${p => p.theme.shadow};
	}
`;

export const description = styled.p`
	font-size: 1.1em;
`

export const title = styled.h2`
	border-bottom: 1px solid #ccc;
	/* text-align: center; */
	font-weight: bold;
	font-size: 1.7em;
	margin: 0 5px;
	color: ${p => p.theme.headline};
	text-shadow: 1px 1px 2px ${p => p.theme.shadow};
`;

export const projectDetails = styled.div`
	display: flex;
    justify-content: space-between;
    align-content: flex-start;
	color: ${p => p.theme.paragraph};

`;

export const link = styled.a`
	text-decoration: none;
	color: ${p => p.theme.buttonText};
	font-weight: bold;
	/* font-size: 1.5em; */
	text-align: center;
	margin: 0 auto;
	
    &:hover,
	&:active {
		text-decoration: underline;
	}
`;

export const img = styled.img`
	width: 5em;
	height: 5em;
	margin: 0.6rem;
`;
