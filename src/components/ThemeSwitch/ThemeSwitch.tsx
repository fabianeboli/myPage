import React, { useContext } from 'react';
import * as S from './ThemeSwitch.style';
import { ThemeContext, themesList } from '../../contexts/ThemeContext';

const ThemeSwitch = () => {
    const {changeTheme, isDark, changeIsDark } = useContext(ThemeContext);

    const handleClick = () => {
        changeIsDark(!isDark);
        changeTheme(isDark ? themesList.theme : themesList.darkTheme);
    };

    return (
        <div onClick={() => handleClick()}>
            {isDark && <S.lightBulbOn size="32" />}
            {!isDark && <S.lightBulbOff size="32"  />}
        </div>
    );
};

export default ThemeSwitch;
  