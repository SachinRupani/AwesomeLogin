import {Appearance, Platform} from 'react-native';

export function isNullOrUndefined(input) {
  return input == undefined || input == null;
}

export function isDarkThemeEnabled() {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark';
}

export function isAndroid() {
  return Platform.OS == 'android';
}

export function isIos() {
  return Platform.OS == 'ios';
}
