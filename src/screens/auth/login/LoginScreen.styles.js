import {StyleSheet} from 'react-native';
import {ColorSchemes} from '../../../..';
import {isDarkThemeEnabled} from '../../../utils/Utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.backgroundColor
      : ColorSchemes.light.backgroundColor,
  },

  headerTitleContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.backgroundSecondaryColor
      : ColorSchemes.light.backgroundSecondaryColor,
    position: 'absolute',
    top: -100,
    left: 32,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 48,
  },

  headerTitleTextStyle: {
    fontSize: 20,
    color: isDarkThemeEnabled()
      ? ColorSchemes.dark.primaryColor
      : ColorSchemes.light.primaryColor,
  },

  circlePrimaryBorderStyle: {
    width: 72,
    height: 72,
    position: 'absolute',
    top: -40,
    right: 32,
    borderRadius: 36,
    backgroundColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.primaryColor
      : ColorSchemes.light.primaryColor,
  },

  loginBoxContainer: {
    flex: 1,
    padding: 32,
    marginTop: 96,
  },

  textInputStyle: {
    backgroundColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.backgroundColor
      : ColorSchemes.light.backgroundColor,
  },

  loginButtonForgotPasswordContainer: {
    flexDirection: 'row',
    marginTop: 36,
    alignItems: 'center',
  },

  forgotPasswordContainerStyle: {
    alignItems: 'flex-end',
  },

  forgotPasswordRippleContainerStyle: {
    borderColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.placeholderColor
      : ColorSchemes.light.placeholderColor,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  forgotPasswordTextStyle: {
    color: isDarkThemeEnabled()
      ? ColorSchemes.dark.placeholderColor
      : ColorSchemes.light.placeholderColor,
    fontSize: 14,
  },

  loginButtonStyle: {
    width: 164,
  },

  socialLoginAndRegisterContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginEnd: 32,
    marginBottom: 80,
  },

  registerSectionOuterContainer: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },

  registerSectionContainer: {
    width: 128,
    height: 128,
    borderWidth: 2,
    borderRadius: 75,
    borderColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.accentColor
      : ColorSchemes.light.accentColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerTextStyle: {
    color: isDarkThemeEnabled()
      ? ColorSchemes.dark.primaryColor
      : ColorSchemes.light.accentColor,
    fontSize: 15,
  },

  socialLoginContainerStyle: {
    flex: 1.5,
    height: 144,
    marginStart: -2.5,
    borderWidth: 2.5,
    borderTopRightRadius: 72,
    borderBottomRightRadius: 72,
    borderColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.primaryColor
      : ColorSchemes.light.primaryColor,
    overflow: 'hidden',
  },

  continueWithTextStyle: {
    color: isDarkThemeEnabled()
      ? ColorSchemes.dark.textColorDefault
      : ColorSchemes.light.textColorDefault,
    fontSize: 12,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },

  facebookGoogleButtonContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },

  facebookButtonStyle: {
    marginStart: 32,
    backgroundColor: isDarkThemeEnabled()
      ? ColorSchemes.dark.accentColor
      : ColorSchemes.light.accentColor,
  },

  googleButtonStyle: {
    marginStart: 24,
    backgroundColor: ColorSchemes.googleColorRed,
  },
});
