import React from 'react';
import * as S from './Header.style';
import ScrollButton from '../ScrollButton/ScrollButton';
import backgroundImage from '../../../public/images/Header/Workspace_2_SVG.svg';
const Header = () => {
    return (
        <>
            <S.container>
                <S.headerContainer>
                    <S.showcaseContainer>
                        <S.headerContainer>
                            <S.nameContainer>
                                <S.name>Fabian Eboli</S.name>
                                <S.profession>
                                    Web developer
                                </S.profession>
                            </S.nameContainer>
                        </S.headerContainer>
                        <S.contact>
                            <S.link href="mailto:fabianeboli@tutanota.com">
                                fabianeboli@tutanota.com
                            </S.link>
                            <S.link href="https://www.github.com/fabianeboli">
                                <S.github size="32" />
                            </S.link>
                        </S.contact>
                    </S.showcaseContainer>
                    <S.backgroundContainer>
                        <S.backgroundImage src={backgroundImage} />
                    </S.backgroundContainer>
                </S.headerContainer>
            <ScrollButton />

            </S.container>
        </>
    );
};

export default Header;
