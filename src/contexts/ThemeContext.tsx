import React, { useState, useContext, createContext } from 'react';
import { theme, darkTheme } from '../components/Theme.style';
import { DefaultTheme } from 'styled-components';

export enum ColorPallette {
    light = 'light',
    dark = 'dark',
}

export const themesList = {
    theme: theme,
    darkTheme: darkTheme,
};

interface IThemeContext {
    theme: DefaultTheme;
    changeTheme: (theme: DefaultTheme) => any;
    isDark: boolean;
    changeIsDark: (isDark: boolean) => any;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: theme,
    changeTheme: () => {},
    isDark: false,
    changeIsDark: () => {},
});

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<DefaultTheme>(themesList.theme);
    const [isDark, setIsDark] = useState<boolean>(false);
    const changeTheme = (theme: DefaultTheme) => setTheme(theme);
    const changeIsDark = (isDark: boolean) => setIsDark(isDark);
    return (
        <ThemeContext.Provider value={{ theme, changeTheme, isDark, changeIsDark }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
