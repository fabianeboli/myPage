import styled from 'styled-components';

export const container = styled.div`
	/* border-left: 4px solid ${p => p.theme.headline}; */
	margin: 5% 2%;
	font-size: calc(0.8em + 0.5vw);
	display: flex;
	flex-direction: column;
    justify-content: center;
    text-align: center;
    align-content: center;
    align-items: center unsafe;
	box-shadow: ${p => p.theme.cardShadow};
    flex-grow: 1;
    flex-basis: 25%;

	

	
`;

export const button = styled.button`
    border: none;
    max-width: 100%;
    font-weight: bold;
    border-radius: 60px;
    background-size: 300% 100%;
    padding: 10px 20px;
    font-size: 1.1em;
    color: ${p => p.theme.buttonText};
    background-image: ${p => p.theme.gradientButton};
    text-align: center;
    border: none;
    font-weight: bold;
    appearance: none;
    margin: 0.375em;
    transition: 0.3s ease;
    box-shadow: 0 4px 5px 0 ${p => p.theme.buttonShadow};
    transition: all 0.4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        box-shadow: 0px 2px 8px 2px ${p => p.theme.buttonShadow};
        cursor: pointer;
        transition: all 0.4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;

export const image = styled.div<{ image: string }>`
    background-image: url(${p => p.image});
    height: 20vh;
    align-self: stretch;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 15px 0;
`;

export const description = styled.p`
    font-size: 1em;
    color: ${p => p.theme.paragraph};
`;

export const title = styled.h2`
    font-weight: bold;
    font-size: 1.7em;
    margin: 1% 5px;
    color: ${p => p.theme.headline};
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
    align-self: flex-end;
    flex: 1 auto;
    align-self: flex-end;
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
