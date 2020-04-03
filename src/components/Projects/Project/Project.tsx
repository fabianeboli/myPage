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
                    <picture>
                        <source srcSet={props.image + '?webp'} type="image/webp" />
                        <S.image image={props.image} title={`${props.name} Project`} />
                    </picture>
                    <S.description>{props.description}</S.description>
                </S.projectDetails>
                <S.buttonContainer>
                    <S.link href={props.url}>
                        <S.button>{liveVersion}</S.button>
                    </S.link>
                </S.buttonContainer>
            </S.container>
        </>
    );
};

export default Project;
