import styled from 'styled-components';



export const container = styled.div`
	text-align: center;
	margin: 15% auto;
	max-width: 25vw;
	font-size: 1.35em;
`;

export const nameContainer = styled.div`
	border-bottom: 2px solid black;
`;

export const name = styled.h1`
	font-family: 'Lato', sans-serif;
	margin: 2% auto;
`;
export const title = styled.h3`
	font-family: 'Lato', sans-serif;
	margin: 2% auto;
`;

export const mail = styled.h4`
	font-family: 'Lato', sans-serif;
	margin: 2% auto;
`;

export const link = styled.a`
	font-family: 'Lato', sans-serif;
	color: black;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
