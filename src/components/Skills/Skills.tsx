import React from 'react';
import Skill, { ISkill } from './Skill/Skill';
import uuid from 'uuid/v4';
import * as S from './Skills.style';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import {words } from '../../Language/words';

const skillsList: ISkill[] = [
    {
        name: 'HTML5',
        image: require('../../images/Skills/html-5-logo-svg-vector.svg'),
    },
    {
        name: 'CSS3',
        image: require('../../images/Skills/css-3-logo-svg-vector.svg'),
    },
    {
        name: 'Javascript',
        image: require('../../images/Skills/javascript-logo-svg-vector.svg'),
    },
    {
        name: 'Typescript',
        image: require('../../images/Skills/typescript-seeklogo.com.svg'),
    },
    {
        name: 'React',
        image: require('../../images/Skills/react-1-logo-svg-vector.svg'),
    },
    {
        name: 'Jest',
        image: require('../../images/Skills/jest-logo-svg-vector.svg'),
    },
    {
        name: 'Sass',
        image: require('../../images/Skills/sass-1-logo-svg-vector.svg'),
    },
    {
        name: 'Styled-components',
        image: require('../../images/Skills/styled-components.png'),
    },
    {
        name: 'Node',
        image: require('../../images/Skills/nodejs-seeklogo.com.svg'),
    },
    {
        name: 'Express',
        image: require('../../images/Skills/express-js-seeklogo.com.svg'),
    },
    {
        name: 'MongoDB',
        image: require('../../images/Skills/mongodb-logo-svg-vector.svg'),
    },
    {
        name: 'PostgreSQL',
        image: require('../../images/Skills/PostgreSQL_logo.3colors.svg'),
    },
    {
        name: 'SQL Server',
        image: require('../../images/Skills/microsoft-sql-server-logo-svg-vector.svg'),
    },
    {
        name: 'Python',
        image: require('../../images/Skills/python-5-logo-svg-vector.svg'),
    },
    {
        name: 'Java',
        image: require('../../images/Skills/java-4-logo-svg-vector.svg'),
    },
    {
        name: 'Kotlin',
        image: require('../../images/Skills/kotlin-1-logo-svg-vector.svg'),
    },
    {
        name: 'C#',
        image: require('../../images/Skills/external-content.duckduckgo.com.png'),
    },
];

const presentSkills = (): JSX.Element[] =>
    skillsList.map(skill => <Skill key={uuid()} name={skill.name} image={skill.image} />);

const Skills: React.FC = () => {
    const {language} = useContext(LanguageContext); 
    const {skills} = words[language];

    const skillsList: JSX.Element[] = presentSkills();
    return (
        <S.container>
            <legend>{skills}</legend>
                {skillsList}
        </S.container>
    );
};

export default Skills;
