import React, { useState, useEffect } from 'react';
import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';
import LanguageSwitch from '../src/components/LanguageSwitch/LanguageSwitch';
import Skills from '../src/components/Skills/Skills';
import Loader from '../src/components/Loader/Loader';

const index = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const loadData = () => {
        return(
    <>
       
    </>
        )
        
    }

    useEffect(() => {
       loadData()
    }, [])

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
