import React from 'react';
import Project, { IProject } from './Project/Project';
import uuid from 'uuid/v4';
import * as S from './Projects.style';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { words } from '../../Language/words';
import ScrollButton from '../ScrollButton/ScrollButton';

const Projects = () => {
    const { language } = useContext(LanguageContext);
    const { projectDescription } = words[language];
    const ProjectsList: IProject[] = [
        {
            name: 'Game Of Life',
            image: require('../../../public/images/Projects/GamesOfLife.png'),
            description: projectDescription.gameOfLife,
            url: 'https://codesandbox.io/s/game-of-life-0wy3o',
        },
        {
            name: 'Lights Out',
            image: require('../../../public/images/Projects/LightsOut.png'),
            description: projectDescription.lightsOut,
            url: 'https://codesandbox.io/s/lights-out-mvb9f',
        },
        {
            name: 'Restaurant',
            image: require('../../../public/images/Projects/Restaurant.png'),
            description: projectDescription.restaurant,
            url: 'https://reactp01-ad334.web.app/menu',
        },
        {
            name: 'Vat Pit',
            image: require('../../../public/images/Projects/VatPit.png'),
            description: projectDescription.vatPit,
            url: 'https://vatpit.herokuapp.com/',
        },
        {
            name: 'Dry Jokes',
            image: require('../../../public/images/Projects/DryJokes.png'),
            description: projectDescription.dryJokes,
            url: 'https://codesandbox.io/s/dry-jokes-qpvt8',
        },
        {
            name: 'Dice Poker',
            image: require('../../../public/images/Projects/DicePoker.png'),
            description: projectDescription.dicePoker,
            url: 'https://codesandbox.io/s/dice-poker-2wks7',
        },
        {
            name: 'Hangman',
            image: require('../../../public/images/Projects/Hangman.png'),
            description: projectDescription.hangman,
            url: 'https://codesandbox.io/s/hangman-du2mb',
        },
        {
            name: 'Memory Game',
            image: require('../../../public/images/Projects/MemoryGame.png'),
            description: projectDescription.memoryGame,
            url: 'https://codesandbox.io/s/memory-game-f7kt5',
        },
        {
            name: 'Pixel Art Game',
            image: require('../../../public/images/Projects/PixelArt.png'),
            description: projectDescription.pixelArtGame,
            url: 'https://codesandbox.io/s/dice-poker-2wks7',
        },
        {
            name: 'Secret Club',
            image: require('../../../public/images/Projects/SecretClub.png'),
            description: projectDescription.secretClub,
            url: 'https://codesandbox.io/s/secret-club-frp4c',
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
        // {
        //     name: "MineSweeper made with Ionic react",
        //     image: "",
        //     description: '',
        //     url: ''
        // }
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
    return (
        <>
        <S.projectList id="Projects">{presentProjects()}</S.projectList> 
        </>
    ) 
};

export default Projects;
