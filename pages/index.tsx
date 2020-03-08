import React, { useContext } from 'react';

import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';
import Overlay from '../src/components/Overlay/Overlay';
import { particles as Particles } from '../src/components/Theme.style';
import { ThemeProvider } from 'styled-components';
import ThemeSwtich from '../src/components/ThemeSwitch/ThemeSwitch';
import { ThemeContext } from '../src/contexts/ThemeContext';
import LanguageSwitch from '../src/components/LanguageSwitch/LanguageSwitch';
import Skills from '../src/components/Skills/Skills';
import Footer from '../src/components/Footer/Footer';
// store fonts locally
// correct language switch
// export static site
// correct some of the projects
// Optimize Images
const index = () => {

    return (
        <>
            <LanguageSwitch />
            <Header />
            <Skills />
            <Projects />
        </>
    );
};

export default index;
