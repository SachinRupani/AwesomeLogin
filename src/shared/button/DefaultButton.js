import React from 'react';
import {Button} from 'react-native-paper';
import {textStyles} from '../../commonStyles/TextStyles';
import {isNullOrUndefined} from '../../utils/Utils';
import {styles} from './DefaultButton.styles';

export default function DefaultButton(props) {
  /**
   * Props
   * 1. buttonText -> (string) required
   * 2. onButtonPressed -> (function) required
   * 3. additionalButtonStyle -> (styles) optional
   * 4. additionalButtonContentStyle -> (styles) optional
   * 5. additionalButtonLabelStyle -> (styles) optional
   * 6. upperCaseText -> (boolean) defaut true
   */

  return (
    <Button
      theme={{roundness: 28}}
      uppercase={
        isNullOrUndefined(props.upperCaseText) ? true : props.upperCaseText
      }
      style={[styles.buttonStyle, props.additionalButtonStyle]}
      contentStyle={[
        styles.buttonContentStyle,
        props.additionalButtonContentStyle,
      ]}
      labelStyle={[
        styles.buttonTextColorStyle,
        textStyles.buttonText,
        props.additionalButtonLabelStyle,
      ]}
      mode="contained"
      onPress={() => props.onButtonPressed()}>
      {props.buttonText}
    </Button>
  );
}
