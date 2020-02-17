import React from 'react';

import Projects from '../src/components/Projects/Projects';
import Header from '../src/components/Header/Header';
import Overlay from '../src/components/Overlay/Overlay';
import { GlobalStyle, theme } from '../src/components/Theme.style';
import { ThemeProvider } from 'styled-components';
const index = () => {
    return (
        <>
            {/* <Particles
				params={{
					particles: {
						number: {
							value: 60,
							density: {
								enable: true,
								value_area: 1500,
							},
						},
						line_linked: {
							enable: true,
							opacity: 0.02,
						},
						move: {
							direction: 'right',
							speed: 0.05,
						},
						size: {
							value: 1,
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
						},
						modes: {
							push: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
				}}
			/>{' '} */}
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <Overlay>
                        <Header />
                        <Projects />
                    </Overlay>
                </>
            </ThemeProvider>
        </>
    );
};

export default index;
