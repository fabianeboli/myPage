import { DefaultTheme } from './src/components/Theme.style'
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string,
        headline: string, 
        paragraph: string,
        button: string,
        buttonText: string,
        shadow: string,
        gradient: string,
        gradientButton: string,
        buttonShadow: string,
        overlayGradientBackground: string,
        nonMobilePx: string,
        cardShadow: string,
        backgroundSize: string,
    }
}
