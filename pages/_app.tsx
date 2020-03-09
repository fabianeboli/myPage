import React, { useContext } from 'react';
import App from 'next/app';
import { ThemeProvider as ContextThemeProvider, ThemeContext } from '../src/contexts/ThemeContext';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { GlobalStyle } from '../src/components/Theme.style';
import { ThemeProvider } from 'styled-components';
import ThemeSwitch from '../src/components/ThemeSwitch/ThemeSwitch';
import Footer from '../src/components/Footer/Footer';
import Overlay from '../src/components/Overlay/Overlay';
import Particles from 'react-particles-js';
import Head from 'next/head';
import Loader from '../src/components/Loader/Loader';

const Theme = (props: { children: any }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    {props.children}
                </>
            </ThemeProvider>
        </>
    );
};

const ParticleBackground = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <>
            {isDark && (
                <Particles
                    style={{ position: 'absolute' }}
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
                                value: '#ffd803',
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
                />
            )}
        </>
    );
};
const Main = (props: { children: any }) => {
    return (
        <>
            <ContextThemeProvider>
                <LanguageProvider>
                    <Theme>
                        <>
                            <ThemeSwitch />
                            <ParticleBackground />
                            <Overlay>{props.children}</Overlay>
                            <Footer />
                        </>
                    </Theme>
                </LanguageProvider>
            </ContextThemeProvider>
        </>
    );
};

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }
    // state = { loading: true };

    // componentDidMount() {
    //     this.setState({loading: false})
    // }

    render() {
        const { Component, pageProps } = this.props;

        const main = (
            <Main>
                <Head>
                    <title>Fabian Eboli - my Website</title>
                </Head>
                <Component {...pageProps} />
            </Main>
        );

        return (
            <>
               {main}
            </>
        );
    }
}

export default MyApp;
