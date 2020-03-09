import React from 'react';
import gb from '../../../public/images/Flags/gb.svg';
import it from '../../../public/images/Flags/it.svg';
import pl from '../../../public/images/Flags/pl.svg';
import * as S from './LanguageSwitch.style';
import { LanguageContext, LangTypes } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const LanguageSwitch = () => {
    const { changeLanguage } = useContext(LanguageContext);
    const handleLanguageChange = (event: LangTypes) => {
        changeLanguage(event);
    };
    return (
        <S.container>
            <S.inner>
                <span>
                    <S.languageIcon size="26" />
                </span>
                <S.flags>
                    <S.flag onClick={() => handleLanguageChange(LangTypes.english)} src={gb} />
                    <S.flag onClick={() => handleLanguageChange(LangTypes.polish)} src={pl} />
                </S.flags>
            </S.inner>
        </S.container>
    );
};

export default LanguageSwitch;
