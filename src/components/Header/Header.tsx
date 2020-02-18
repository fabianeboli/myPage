import React from 'react';
import * as S from './Header.style';
import Skills from '../Skills/Skills';
import Animation from './Animation/Animation';
const Header = () => {
	return (
		<S.container>
			<S.showcaseContainer>
				<S.nameContainer>
					<S.name>Fabian Eboli </S.name>
					{/* <Animation/> */}
					<S.title><span>Web Developer</span> from tricity</S.title>
				</S.nameContainer>
				<S.mail>
					<S.link href="mailto:fabianeboli@tutanota.com">fabianeboli@tutanota.com</S.link>
				</S.mail>
				
			</S.showcaseContainer>
			<Skills />
		</S.container>
	);
};

export default Header;
