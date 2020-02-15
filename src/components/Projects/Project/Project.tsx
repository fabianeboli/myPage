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

				<div>
					Go to <S.link href={props.url}>Live version</S.link>
				</div>
			</S.container>
		</>
	);
};

export default Project;
