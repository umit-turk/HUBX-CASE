import {StyleSheet, TextStyle} from 'react-native';
import {ThemeVariables} from './variables';

type TextStyles = {
  dark: TextStyle;
  blue: TextStyle;
  white: TextStyle;
  black: TextStyle;
  danger: TextStyle;
  main: TextStyle;
  xSmall: TextStyle;
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
  xLarge: TextStyle;
  xxLarge:TextStyle;
  fontWeight: (fw?: string) => TextStyle;
  center: TextStyle;
  rubik: TextStyle;
};
export const TextStyles: TextStyles = StyleSheet.create({
  dark: {
    color: ThemeVariables.dark,
  },
  blue: {
    color: ThemeVariables.blue,
  },
  white: {
    color: ThemeVariables.white,
  },
  black: {
    color: ThemeVariables.black,
  },
  danger: {
    color: ThemeVariables.danger,
  },
  main: {
    color: ThemeVariables.main,
  },
  xSmall: {
    fontSize: 11,
  },
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 16,
  },
  large: {
    fontSize: 20,
  },
  xLarge: {
    fontSize: 24,
  },
  xxLarge: {
    fontSize: 27,
  },
  fontWeight: (fw = '500') => ({
    fontWeight: fw,
  }),
  center: {
    textAlign: 'center',
  },
  rubik: {
    fontFamily:'Rubik',
  },
});
