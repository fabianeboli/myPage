import React from 'react';
import Project, { IProject } from './Project/Project';
import uuid from 'uuid/v4';
import * as S from './Projects.style';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { words } from '../../Language/words';



const Projects = () => {
    const { language } = useContext(LanguageContext);
    const { projectDescription } = words[language];
    const ProjectsList: IProject[] = [
        {
            name: 'Game Of Life',
            image: require('../../images/Projects/GamesOfLife.png'),
            description: projectDescription.gameOfLife,
            url: 'https://codesandbox.io/s/game-of-life-0wy3o',
        },
        {
            name: 'Lights Out',
            image: require('../../images/Projects/LightsOut.png'),
            description: projectDescription.lightsOut,
            url: 'https://codesandbox.io/s/lights-out-mvb9f',
        },
        {
            name: 'Restaurant',
            image: require('../../images/Projects/Restaurant.png'),
            description: projectDescription.restaurant,
            url: 'https://reactp01-ad334.web.app/menu',
        },
        {
            name: 'Vat Pit',
            image: require('../../images/Projects/VatPit.png'),
            description: projectDescription.vatPit,
            url: 'https://vatpit.herokuapp.com/',
        },
        {
            name: 'Dry Jokes',
            image: require('../../images/Projects/DryJokes.png'),
            description: projectDescription.dryJokes,
            url: 'https://codesandbox.io/s/dry-jokes-qpvt8',
        },
        {
            name: 'Dice Poker',
            image: require('../../images/Projects/DicePoker.png'),
            description: projectDescription.dicePoker,
            url: 'https://codesandbox.io/s/dice-poker-2wks7',
        },
        {
            name: 'Hangman',
            image: require('../../images/Projects/Hangman.png'),
            description: projectDescription.hangman,
            url: 'https://codesandbox.io/s/hangman-du2mb',
        },
        {
            name: 'Memory Game',
            image: require('../../images/Projects/MemoryGame.png'),
            description: projectDescription.memoryGame,
            url: 'https://codesandbox.io/s/memory-game-f7kt5',
        },
        {
            name: 'Pixel Art Game',
            image: require('../../images/Projects/PixelArt.png'),
            description: projectDescription.pixelArtGame,
            url: 'https://codesandbox.io/s/dice-poker-2wks7',
        },
        //   { name: "Nbus.pl",
        //     image: "../../public/Projects/VatPit.png",
        //     description:  projectDescription.nbuspl,
        //     url: "https://vatpit.herokuapp.com/"
        //   },
        //   { name: "Facebook-Clone",
        //   image: "../../public/Projects/VatPit.png",
        //   description:  projectDescription.facebookClone,
        //   url: "https://vatpit.herokuapp.com/"
        // },
    ];


    const presentProjects = () =>
        ProjectsList.map(project => {
            return (
                <Project
                    key={uuid()}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    url={project.url}
                />
            );
        });

    return <S.projectList id="Projects">{presentProjects()}</S.projectList>;
};

export default Projects;
