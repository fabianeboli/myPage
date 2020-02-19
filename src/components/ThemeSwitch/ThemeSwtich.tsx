import React, { useState, useContext } from 'react';
import * as S from './ThemeSwitch.style';
import { ThemeContext, ColorPallette, themesList } from '../../contexts/ThemeContext';

const ThemeSwitch = () => {
    const {changeTheme, isDark, changeIsDark } = useContext(ThemeContext);

    const handleClick = () => {
        changeIsDark(!isDark);
        changeTheme(isDark ? themesList.theme : themesList.darkTheme);
    };

    return (
        <div onClick={() => handleClick()}>
            {isDark && <S.lightBulbOn size="32" crossOrigin />}
            {!isDark && <S.lightBulbOff size="32" crossOrigin />}
        </div>
    );
};

export default ThemeSwitch;
  