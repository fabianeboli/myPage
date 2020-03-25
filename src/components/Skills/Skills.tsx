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
        image: require('../../../public/images/Skills/html-5-logo-svg-vector.svg'),
    },
    {
        name: 'CSS3',
        image: require('../../../public/images/Skills/css-3-logo-svg-vector.svg'),
    },
    {
        name: 'Javascript',
        image: require('../../../public/images/Skills/javascript-logo-svg-vector.svg'),
    },
    {
        name: 'Typescript',
        image: require('../../../public/images/Skills/typescript-seeklogo.com.svg'),
    },
    {
        name: 'React',
        image: require('../../../public/images/Skills/react-1-logo-svg-vector.svg'),
    },
    {
        name: 'Jest',
        image: require('../../../public/images/Skills/jest-logo-svg-vector.svg'),
    },
    {
        name: 'Sass',
        image: require('../../../public/images/Skills/sass-1-logo-svg-vector.svg'),
    },
    {
        name: 'Styled-components',
        image: require('../../../public/images/Skills/styled-components.png'),
    },
    {
        name: 'Node',
        image: require('../../../public/images/Skills/nodejs-seeklogo.com.svg'),
    },
    {
        name: 'Express',
        image: require('../../../public/images/Skills/express-js-seeklogo.com.svg'),
    },
    {
        name: 'MongoDB',
        image: require('../../../public/images/Skills/mongodb-logo-svg-vector.svg'),
    },
    {
        name: 'PostgreSQL',
        image: require('../../../public/images/Skills/PostgreSQL_logo.3colors.svg'),
    },
    {
        name: 'SQL Server',
        image: require('../../../public/images/Skills/microsoft-sql-server-logo-svg-vector.svg'),
    },
    {
        name: 'Python',
        image: require('../../../public/images/Skills/python-5-logo-svg-vector.svg'),
    },
    {
        name: 'Java',
        image: require('../../../public/images/Skills/java-4-logo-svg-vector.svg'),
    },
    {
        name: 'Kotlin',
        image: require('../../../public/images/Skills/kotlin-1-logo-svg-vector.svg'),
    },
    {
        name: 'C#',
        image: require('../../../public/images/Skills/C#logo.svg'),
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
            <S.title id="Skills">{skills}</S.title>
                {skillsList}
           
        </S.container>
    );
};

export default Skills;
