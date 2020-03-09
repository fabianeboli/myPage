import React from 'react';
import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';
import LanguageSwitch from '../src/components/LanguageSwitch/LanguageSwitch';
import Skills from '../src/components/Skills/Skills';

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
