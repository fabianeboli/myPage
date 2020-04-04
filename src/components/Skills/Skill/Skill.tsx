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
            <S.skillLogo src={props.image} alt={props.name + ' Skill'} />
        </S.container>
    );
};

export default Skill;
