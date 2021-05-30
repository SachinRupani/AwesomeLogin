import {StyleSheet} from 'react-native';
import {ColorSchemes} from '../../..';
import {isDarkThemeEnabled} from '../../utils/Utils';

export const styles = StyleSheet.create({
  buttonContentStyle: {
    height: 52,
    justifyContent: 'center',
    backgroundColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.accentColor
      : ColorSchemes.light.accentColor,
  },

  buttonTextColorStyle: {
    color: '#FFFFFF',
  },
});
