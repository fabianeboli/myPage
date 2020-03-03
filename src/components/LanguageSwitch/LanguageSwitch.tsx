import React from 'react';
import gb from '../../images/Flags/gb.svg';
import it from '../../images/Flags/it.svg';
import pl from '../../images/Flags/pl.svg';
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
                    <img onClick={() => handleLanguageChange(LangTypes.english)} src={gb} />
                    <img onClick={() => handleLanguageChange(LangTypes.polish)} src={pl} />
                    {/* <img src={it} /> */}
                </S.flags>
            </S.inner>
        </S.container>
    );
};

export default LanguageSwitch;
