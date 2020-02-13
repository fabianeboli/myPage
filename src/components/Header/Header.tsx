import React from 'react';
import * as S from './Header.style';
const Header = () => {
	return (
		<S.container>
			<S.nameContainer>
				<S.name>Fabian Eboli </S.name>
				<S.title>Web Developer</S.title>
			</S.nameContainer>

			<S.mail>
				<S.link href="mailto:fabianeboli@tutanota.com">fabianeboli@tutanota.com</S.link>
			</S.mail>
		</S.container>
	);
};

export default Header;
