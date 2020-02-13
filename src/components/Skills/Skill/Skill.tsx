import React from "react";
import * as S from './Skill.style';

export interface ISkill {
  name: string;
  image: string;
}

const Skill = (props: ISkill) => {
  return (
    <>
      <S.img src={props.image} />
      {/* <p>{props.name}</p> */}
    </>
  );
};

export default Skill;
