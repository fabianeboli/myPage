import { DefaultTheme } from './src/components/Theme.style';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string;
        headline: string;
        paragraph: string;
        button: string;
        buttonText: string;
        LightSwitchColor: string;
        shadow: string;
        gradient: string;
        gradientButton: string;
        gradientFallback: string;
        gradientProfession: string;
        buttonShadow: string;
        overlayGradientBackground: string;
        nonMobilePx: string;
        cardShadow: string;
        backgroundSize: string;
    }
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
