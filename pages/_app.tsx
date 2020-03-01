import React from 'react';
import App from 'next/app';
import { ThemeProvider as ContextThemeProvider } from '../src/contexts/ThemeContext';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import Background from '../src/components/Background/Background';
// import { GlobalStyle, theme } from '../src/components/Theme.style';
// import { ThemeProvider } from 'styled-components';

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

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <ContextThemeProvider>
                    <LanguageProvider>
                        <>
                            <Component {...pageProps} />
                        </>
                    </LanguageProvider>
                </ContextThemeProvider>
            </>
        );
    }
}

export default MyApp;
