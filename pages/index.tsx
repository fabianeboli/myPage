import React,  { useContext } from 'react';

import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';
import Overlay from '../src/components/Overlay/Overlay';
import {  particles as Particles, GlobalStyle } from '../src/components/Theme.style';
import { ThemeProvider } from 'styled-components';
import ThemeSwtich from '../src/components/ThemeSwitch/ThemeSwtich';
import { ThemeContext } from '../src/contexts/ThemeContext';
import LanguageSwitch from '../src/components/LanguageSwitch/LanguageSwitch';
import Skills from '../src/components/Skills/Skills';
import Footer from '../src/components/Footer/Footer';
// store fonts locally
// correct language switch 
// export static site
// correct some of the projects
// Optimize Images
const index = () => {
	const {theme, isDark} = useContext(ThemeContext)
    return (
        <>
            <ThemeProvider theme={theme}>
                <>
				<GlobalStyle/>
            {isDark && <Particles
				params={{
					particles: {
						number: {
							value: 100,
							density: {
								enable: true,
								value_area: 1500,
							},
						},
						line_linked: {
							enable: false,
							opacity: 0.02,
						},
						color: {
							value: "#ff0"
						},
						move: {
							direction: 'right',
							speed: 0.05,
						},
						size: {
							value: 1,
							random: true,
						},
						opacity: {
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.05,
							},
						},
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: 'push',
							},
							onhover: {
								enable: true,
								mode: 'repulse',
							}
						},
						modes: {
							push: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
				}}
			/>}
						<ThemeSwtich/>
                    <Overlay>
						<LanguageSwitch/>
                        <Header />
						<Skills />
                        <Projects />
                    </Overlay>
					<Footer/>
                </>
            </ThemeProvider>
        </>
    );
};

export default index;
