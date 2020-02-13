import React from 'react';
import Project, { IProject } from './Project/Project';
import uuid from 'uuid/v4';
const ProjectsList: IProject[] = [
	{
		name: 'Game Of life',
		image: require('../../images/Projects/GamesOfLife.png'),
		description: '',
		url: 'https://codesandbox.io/s/game-of-life-0wy3o',
	},
	{
		name: 'Lights Out',
		image: require('../../images/Projects/LightsOut.png'),
		description: '',
		url: 'https://codesandbox.io/s/lights-out-mvb9f',
	},
	{
		name: 'Dry Jokes',
		image: require('../../images/Projects/DryJokes.png'),
		description: '',
		url: 'https://codesandbox.io/s/dry-jokes-qpvt8',
	},
	{
		name: 'Dice Poker',
		image: require('../../images/Projects/DicePoker.png'),
		description: '',
		url: 'https://codesandbox.io/s/dice-poker-2wks7',
	},
	{
		name: 'Hangman',
		image: require('../../images/Projects/Hangman.png'),
		description: '',
		url: 'https://codesandbox.io/s/hangman-du2mb',
	},
	{
		name: 'Memory Game',
		image: require('../../images/Projects/MemoryGame.png'),
		description: '',
		url: 'https://codesandbox.io/s/memory-game-f7kt5',
	},
	{
		name: 'Pixel Art Game',
		image: require('../../images/Projects/DicePoker.png'),
		description: '',
		url: 'https://codesandbox.io/s/dice-poker-2wks7',
	},
	{
		name: 'Vat Pit',
		image: require('../../images/Projects/VatPit.png'),
		description: '',
		url: 'https://vatpit.herokuapp.com/',
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
	return <>{presentProjects()}</>;
};

export default Projects;
