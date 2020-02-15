import styled from 'styled-components';

export const container = styled.div`
	border-left: 4px solid blue;
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
		color: #444;
	}

	& button {
		/* background-color: transparent;
		border: none; */
        background-color: orange;
		font-weight: bold;
        border: 2px solid orange;
        border-radius: 4px;
        padding: 5px 15px;

	}
`;

export const description = styled.p`
	font-size: 1.2em;
`

export const title = styled.h2`
	border-bottom: 1px solid #ccc;
	/* text-align: center; */
	font-weight: bold;
	font-size: 1.5em;
	color: orangered;
`;

export const projectDetails = styled.div`
	display: flex;
    justify-content: space-between;
    align-content: flex-start;

`;

export const link = styled.a`
	text-decoration: none;
	color: orangered;
	font-weight: bold;
	font-size: 1.5em;
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
