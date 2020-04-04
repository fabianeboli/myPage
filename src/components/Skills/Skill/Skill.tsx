import React from 'react';
import * as S from './Skill.style';

export interface ISkill {
    name: string;
    image: string;
}

const Skill = (props: ISkill) => {
    return (
        <S.container>
            <S.popup>{props.name}</S.popup>
            <picture>
                <source srcSet={props.image + '?webp'} type={'image/webp'} />
                <source srcSet={props.image} type={'image/svg'} />
                <S.skillLogo src={props.image} alt={props.name + ' Skill'} />
            </picture>
        </S.container>
    );
};

export default Skill;
