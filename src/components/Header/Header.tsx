import React from 'react';
import * as S from './Header.style';
import Skills from '../Skills/Skills';
import Animation from './Animation/Animation';
import ScrollButton from '../ScrollButton/ScrollButton';

const Header = () => {
	return (
		<S.container>
			<S.showcaseContainer>
				<S.nameContainer>
					<S.name>Fabian Eboli </S.name>
					<S.title><span>Web Developer</span> from tricity</S.title>
				</S.nameContainer>
				<S.contact>
					<S.link href="mailto:fabianeboli@tutanota.com">fabianeboli@tutanota.com</S.link>
					<S.link href="https://www.github.com/fabianeboli"><S.github size='32' crossOrigin/></S.link>
				</S.contact>
			<ScrollButton/>
				
			</S.showcaseContainer>
			<Skills />
		</S.container>
	);
};

export default Header;
