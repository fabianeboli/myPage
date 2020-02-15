import React from 'react';
import styled from 'styled-components';
import Skills from '../src/components/Skills/Skills';
import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';
import Overlay from '../src/components/Overlay/Overlay';
import { GlobalStyle } from '../src/components/Theme.style';

const index = () => {
	return (
		<>
			<GlobalStyle/>
				<Overlay>
					<Header />
					<Projects />
				</Overlay>
		</>
	);
};

export default index;
