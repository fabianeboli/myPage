import React from 'react';
import * as S from './Project.style';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { useContext } from 'react';
import { words } from '../../../Language/words';

export interface IProject {
    name: string;
    image: string;
    description?: string;
    url: string;
}

const Project = (props: IProject) => {
    const { language } = useContext(LanguageContext);
    const { liveVersion } = words[language];
    return (
        <>
            <S.container>
                <S.title>{props.name}</S.title>
                <S.projectDetails>
                    <S.image image={props.image} />
                    <S.description>{props.description}</S.description>
                </S.projectDetails>
                <S.link href={props.url}>
                    <S.button>{liveVersion}</S.button>
                </S.link>
            </S.container>
        </>
    );
};

export default Project;
