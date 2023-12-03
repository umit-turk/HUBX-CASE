import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../theme/variables';

const ButtonBgColors = {
  green: {
    backgroundColor: ThemeVariables.green,
  },
};

const ButtonTextColors = {
  green: {
    color: ThemeVariables.white,
  },
};

export const ButtonStyles = StyleSheet.create({
  container: (color, borderRadius) => ({
    alignItems: 'center',
    padding:16,
    width:'100%',
    borderRadius:borderRadius,
    ...ButtonBgColors[color],
    ...ButtonTextColors[color],
  }),
  text: (color:string, size) => ({
    ...ButtonTextColors[color],
    fontSize:size,
  }),
});