import React from 'react';
import Project, { IProject } from './Project/Project';
import uuid from 'uuid/v4';
import * as S from './Projects.style';

const ProjectsList: IProject[] = [
    {
        name: 'Game Of life',
        image: require('../../images/Projects/GamesOfLife.png'),
        description: "An implementation of Conway's Game of life.",
        url: 'https://codesandbox.io/s/game-of-life-0wy3o',
    },
    {
        name: 'Lights Out',
        image: require('../../images/Projects/LightsOut.png'),
        description:
            'An implementation of classic lightsOut Game, where the player must flip the lights.',
        url: 'https://codesandbox.io/s/lights-out-mvb9f',
    },
    {
        name: 'Restaurant',
        image: require('../../images/Projects/Restaurant.png'),
        description: 'Website for fictional sushi bar that delivers orders to home.',
        url: 'https://reactp01-ad334.web.app/menu',
    },
    {
        name: 'Vat Pit',
        image: require('../../images/Projects/VatPit.png'),
        description: 'A website for an accountant',
        url: 'https://vatpit.herokuapp.com/',
    },
    {
        name: 'Dry Jokes',
        image: require('../../images/Projects/DryJokes.png'),
        description: 'A web application that fetches jokes from icanhazdadjoke API.',
        url: 'https://codesandbox.io/s/dry-jokes-qpvt8',
    },
    {
        name: 'Dice Poker',
        image: require('../../images/Projects/DicePoker.png'),
        description: `A dice poker game. 
        The game consists of two rounds. After the second round, 
        the final score is calculated and a point is given to the player that 
        has won the game.`,
        url: 'https://codesandbox.io/s/dice-poker-2wks7',
    },
    {
        name: 'Hangman',
        image: require('../../images/Projects/Hangman.png'),
        description: 'An implementation of Hangman game. Player crosses letters in an attempt to reveal the hidden word. Player has a set number of trials. If the wastes them, the game is lost.',
        url: 'https://codesandbox.io/s/hangman-du2mb',
    },
    {
        name: 'Memory Game',
        image: require('../../images/Projects/MemoryGame.png'),
        description: 'An implementation of Memory card game. Player is trying a pair of same looking cards',
        url: 'https://codesandbox.io/s/memory-game-f7kt5',
    },
    {
        name: 'Pixel Art Game',
        image: require('../../images/Projects/PixelArt.png'),
        description:
            'A game where the player selects two colors and size of the grid. After that player can colorize the grid.',
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

    // : `A dice poker game. 
    //     The game consists of two rounds. In the first round, player rolls the dice. 
    //     After rolling the dice, the score is calculated, in which player 
    //     may roll the selected dices once again. After the second round, 
    //     the final score is calculated and a point is given to the player that 
    //     has won the game`,
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
    return <S.projectList id="Projects">{presentProjects()}</S.projectList>;
};

export default Projects;
