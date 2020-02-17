import React from 'react';
import * as S from './Project.style';

export interface IProject {
    name: string;
    image: string;
    description: string;
    url: string;
}

const Project = (props: IProject) => {
    return (
        <>
            <S.container>
                <S.title>{props.name}</S.title>
                <S.projectDetails>
                    <S.description>{props.description}</S.description>
                    <S.img src={props.image} />
                </S.projectDetails>
                <S.link href={props.url}>
                    <button>Go to Live version</button>
                </S.link>
            </S.container>
        </>
    );
};

export default Project;
