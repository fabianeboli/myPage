import React, { useState, createContext } from 'react';

export enum LangTypes {
    english = 'english',
    polish = 'polish',
    // italian = 'italian',
}

interface props {
    children?: any;
}

interface Language {
    language: LangTypes;
    changeLanguage: (language: LangTypes) => any;
}

export const LanguageContext = createContext<Language>({
    language: LangTypes.english,
    changeLanguage: () => {},
});

export const LanguageProvider: React.FC = (props: props) => {
    const [language, setLanguage] = useState<LangTypes>(LangTypes.english);
    const changeLanguage = (language: LangTypes) => setLanguage(language);
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {props.children}
            
        </LanguageContext.Provider>
    );
};
