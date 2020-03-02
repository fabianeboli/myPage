import React from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { words } from '../../Language/words';
import * as S from './Footer.style';
const Footer = () => {
    const { language } = useContext(LanguageContext);
    const { footer } = words[language];
    return (
        <div>
            <S.copyright>{footer}</S.copyright>
        </div>
    );
};

export default Footer;
