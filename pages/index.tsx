import React from 'react';
import styled from 'styled-components';
import Skills from '../src/components/Skills/Skills';
import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';

const index = () => {
	return (
		<>
			<Header />
			<Skills />
			<Projects />
		</>
	);
};

export default index;
