/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {isDarkThemeEnabled} from './src/utils/Utils';

/**
 * Fonts Config
 */
const fontsJson = {
  regular: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
};
const fontConfig = {
  web: fontsJson,
  ios: fontsJson,
  android: fontsJson,
};

/**
 * Colors Schemes
 * Light and Dark
 */
export const ColorSchemes = {
  googleColorRed: '#DB4437',
  dark: {
    primaryColor: '#3cdb84',
    accentColor: '#4383f3',
    backgroundColor: '#121212',
    textColorDefault: '#FFFFFF',
    placeholderColor: '#78909C',
    surfaceColor: '#78909C',
    errorColor: '#ed7853',
    darkTextColor: '#121212',
    backgroundSecondaryColor: '#0c3444',
  },
  light: {
    primaryColor: '#00C853',
    accentColor: '#4383f3',
    backgroundColor: '#FFFFFF',
    textColorDefault: '#000000',
    placeholderColor: '#455A64',
    surfaceColor: '#455A64',
    errorColor: '#F44336',
    darkTextColor: '#FFFFFF',
    backgroundSecondaryColor: '#0c3444',
  },
};

const darkTheme = {
  ...DefaultTheme,
  roundness: 16,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: ColorSchemes.dark.primaryColor,
    accent: ColorSchemes.dark.accentColor,
    background: ColorSchemes.dark.backgroundColor,
    text: ColorSchemes.dark.textColorDefault,
    placeholder: ColorSchemes.dark.placeholderColor,
    surface: ColorSchemes.dark.surfaceColor,
    error: ColorSchemes.dark.errorColor,
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 16,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: ColorSchemes.light.primaryColor,
    accent: ColorSchemes.light.accentColor,
    background: ColorSchemes.light.backgroundColor,
    text: ColorSchemes.light.textColorDefault,
    placeholder: ColorSchemes.light.placeholderColor,
    surface: ColorSchemes.light.surfaceColor,
    error: ColorSchemes.light.errorColor,
  },
};

export default function Main() {
  const isDarkTheme = isDarkThemeEnabled();
  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
