import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {styles} from './LoginScreen.styles';
import {
  TextInput,
  Text,
  HelperText,
  useTheme,
  TouchableRipple,
  FAB,
} from 'react-native-paper';
import {marginStyles} from '../../../commonStyles/MarginTopStyles';
import {isDarkThemeEnabled} from '../../../utils/Utils';
import {isEmailValid, isPasswordValid} from '../../../utils/RegexValidations';
import {textStyles} from '../../../commonStyles/TextStyles';
import DefaultButton from '../../../shared/button/DefaultButton';
import {ColorSchemes} from '../../../..';

export default function LoginScreen() {
  //For default primary color
  const {colors} = useTheme();
  const isDarkTheme = isDarkThemeEnabled();

  //Stateful fields
  const [email, setEmail] = useState(''); //string
  const [password, setPassword] = useState(''); //string
  const [isPasswordVisible, setPasswordVisible] = useState(false); //boolean
  const [isFocussedPasswordField, setFocussedPasswordField] = useState(false); //boolean
  const [isEmailInvalid, setEmailInvalid] = useState(false); //boolean
  const [isPasswordInvalid, setPasswordInvalid] = useState(false); //boolean

  /**
   * Function called on login button press
   */
  function _onLoginButtonPressed() {
    //Check Email Validation
    const isInvalidEmailEntered = !isEmailValid(email);
    setEmailInvalid(isInvalidEmailEntered);

    //If email is invalid don't proceed
    if (isInvalidEmailEntered) {
      return;
    }

    //Check Password Validation
    const isInvalidPasswordEntered = !isPasswordValid(password);
    setPasswordInvalid(isInvalidPasswordEntered);

    //If password is invalid don't proceed
    if (isPasswordInvalid) {
      return;
    }
  }

  /**
   * Email Field
   * @returns view component text input
   */
  function _renderEmail() {
    return (
      <TextInput
        style={[
          marginStyles.margin16,
          styles.textInputStyle,
          textStyles.inputText,
        ]}
        mode="outlined"
        label="E-mail ID"
        keyboardType="email-address"
        value={email}
        onChangeText={updatedTextEmail => {
          const isValidEmailInput = isEmailValid(updatedTextEmail);
          if (isValidEmailInput) {
            setEmailInvalid(false);
          }
          setEmail(updatedTextEmail);
        }}
      />
    );
  }

  /**
   * Email validation error text
   * @returns view component text
   */
  function _renderEmailErrorText() {
    return (
      <HelperText
        style={textStyles.errorText}
        type="error"
        visible={isEmailInvalid}>
        Please enter a valid e-mail address
      </HelperText>
    );
  }

  /**
   * Password Field
   * @returns view component text input
   */
  function _renderPassword() {
    return (
      <TextInput
        style={[
          marginStyles.margin20,
          styles.textInputStyle,
          textStyles.inputText,
        ]}
        mode="outlined"
        label="Password"
        value={password}
        secureTextEntry={!isPasswordVisible}
        right={
          <TextInput.Icon
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            color={
              isFocussedPasswordField ? colors.primary : colors.placeholder
            }
          />
        }
        onChangeText={updatedTextPassword => {
          const isValidPasswordInput = isPasswordValid(updatedTextPassword);
          if (isValidPasswordInput) {
            setPasswordInvalid(false);
          }
          setPassword(updatedTextPassword);
        }}
        onFocus={() => setFocussedPasswordField(true)}
        onBlur={() => setFocussedPasswordField(false)}
      />
    );
  }

  /**
   * Password validation error text
   * @returns view component text
   */
  function _renderPasswordErrorText() {
    return (
      <HelperText
        style={textStyles.errorText}
        type="error"
        visible={isPasswordInvalid}>
        Password must contain at least one lowercase letter, one uppercase
        letter, one numeric digit, one special character and must be at least 6
        characters long
      </HelperText>
    );
  }

  /**
   * Login Button
   * @returns view component
   */
  function _renderLoginButton() {
    return (
      <View style={{flex: 1}}>
        <DefaultButton
          buttonText={'Log in'}
          upperCaseText={false}
          additionalButtonStyle={[styles.loginButtonStyle]}
          onButtonPressed={_onLoginButtonPressed}
        />
      </View>
    );
  }

  /**
   * Forgot Password
   * @returns view component
   */
  function _renderForgotPassword() {
    return (
      <View style={[{flex: 1}, styles.forgotPasswordContainerStyle]}>
        <TouchableRipple
          borderless={true}
          style={styles.forgotPasswordRippleContainerStyle}
          rippleColor={colors.primary}
          onPress={() => {}}>
          <Text style={styles.forgotPasswordTextStyle}>Forgot Password?</Text>
        </TouchableRipple>
      </View>
    );
  }

  /**
   * Login Button & Forgot Password Text Button
   * @returns view component
   */
  function _renderLoginButtonAndForgotPassword() {
    return (
      <View style={styles.loginButtonForgotPasswordContainer}>
        {/* Login Button */}
        {_renderLoginButton()}

        {/* Forgot Password */}
        {_renderForgotPassword()}
      </View>
    );
  }

  /**
   * Register
   * @returns view component
   */
  function _renderRegisterSection() {
    return (
      <View style={styles.registerSectionOuterContainer}>
        <View style={styles.registerSectionContainer}>
          <Text style={{fontSize: 12}}>New Member?</Text>
          <TouchableRipple
            borderless={true}
            style={styles.forgotPasswordRippleContainerStyle}
            rippleColor={colors.primary}
            onPress={() => {}}>
            <Text style={styles.registerTextStyle}>Register</Text>
          </TouchableRipple>
        </View>
      </View>
    );
  }

  /**
   * Social Login
   * @returns view component
   */
  function _renderSocialLoginSection() {
    return (
      <View style={styles.socialLoginContainerStyle}>
        {/* Text: Or Continue with */}
        <Text style={styles.continueWithTextStyle}>Or continue with</Text>

        {/* Facebook & Google Button */}
        <View style={styles.facebookGoogleButtonContainer}>
          {/* Facebook Button */}
          <FAB
            icon="facebook"
            color="#FFFFFF"
            style={styles.facebookButtonStyle}
            onPress={() => {}}
          />

          {/* Google Button */}
          <FAB
            icon="google"
            color="#FFFFFF"
            style={styles.googleButtonStyle}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }

  /**
   * Social Login & Register
   * @returns view component
   */
  function _renderSocialLoginAndRegisterSection() {
    return (
      <View style={styles.socialLoginAndRegisterContainer}>
        {/* Social Login */}
        {_renderSocialLoginSection()}

        {/* Register Section */}
        {_renderRegisterSection()}
      </View>
    );
  }

  //Main component
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={
          isDarkThemeEnabled()
            ? ColorSchemes.dark.backgroundSecondaryColor
            : ColorSchemes.dark.backgroundSecondaryColor
        }
      />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.container}>
          {/* Login Title */}
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleTextStyle}>LOG IN</Text>
          </View>

          {/* Half Circle Design */}
          <View style={styles.circlePrimaryBorderStyle} />

          {/* Login Box */}
          <View style={styles.loginBoxContainer}>
            {/* Email Field */}
            {_renderEmail()}

            {/* Email Field validation error */}
            {isEmailInvalid && _renderEmailErrorText()}

            {/* Password Field */}
            {_renderPassword()}

            {/* Password Field validation error */}
            {isPasswordInvalid && _renderPasswordErrorText()}

            {/* Login Button & Forgot Password */}
            {_renderLoginButtonAndForgotPassword()}
          </View>

          {/* Social Login & Register Section */}
          {_renderSocialLoginAndRegisterSection()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
