import React from 'react';
import Project, { IProject } from './Project/Project';
import uuid from 'uuid/v4';
import * as S from './Projects.style';

const ProjectsList: IProject[] = [
    {
        name: 'Game Of life',
        image: require('../../images/Projects/GamesOfLife.png'),
        description: 'An implementaion of Game of life',
        url: 'https://codesandbox.io/s/game-of-life-0wy3o',
    },
    {
        name: 'Lights Out',
        image: require('../../images/Projects/LightsOut.png'),
        description: 'An implementaion of classic lightsOut Game',
        url: 'https://codesandbox.io/s/lights-out-mvb9f',
    },
    {
        name: 'Restaurant',
        image: require('../../images/Projects/Restaurant.png'),
        description: 'An implementaion of Game of life',
        url: 'https://reactp01-ad334.web.app/menu',
    },
    {
        name: 'Vat Pit',
        image: require('../../images/Projects/VatPit.png'),
        description: 'An implementaion of Game of life',
        url: 'https://vatpit.herokuapp.com/',
    },
    {
        name: 'Dry Jokes',
        image: require('../../images/Projects/DryJokes.png'),
        description: 'An implementaion of Game of life',
        url: 'https://codesandbox.io/s/dry-jokes-qpvt8',
    },
    {
        name: 'Dice Poker',
        image: require('../../images/Projects/DicePoker.png'),
        description: 'An implementaion of Game of life',
        url: 'https://codesandbox.io/s/dice-poker-2wks7',
    },
    {
        name: 'Hangman',
        image: require('../../images/Projects/Hangman.png'),
        description: 'An implementaion of Game of life',
        url: 'https://codesandbox.io/s/hangman-du2mb',
    },
    {
        name: 'Memory Game',
        image: require('../../images/Projects/MemoryGame.png'),
        description: 'An implementaion of Game of life',
        url: 'https://codesandbox.io/s/memory-game-f7kt5',
    },
    {
        name: 'Pixel Art Game',
        image: require('../../images/Projects/PixelArt.png'),
        description: 'An implementaion of Game of life',
        url: 'https://codesandbox.io/s/dice-poker-2wks7',
    },
    //   { name: "Nbus.pl",
    //     image: "../../public/Projects/VatPit.png",
    //     description:  "",
    //     url: "https://vatpit.herokuapp.com/"
    //   },
    //   { name: "Facebook-Clone",
    //   image: "../../public/Projects/VatPit.png",
    //   description:  "",
    //   url: "https://vatpit.herokuapp.com/"
    // },
];

const presentProjects = () =>
	ProjectsList.map(project => (
		<Project
			key={uuid()}
			name={project.name}
			image={project.image}
			description={project.description}
			url={project.url}
		/>
	));

const Projects = () => {
	return <S.projectList>{presentProjects()}</S.projectList>;
};

export default Projects;
