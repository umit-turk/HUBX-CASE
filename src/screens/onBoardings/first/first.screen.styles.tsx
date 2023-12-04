import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../../shared/theme/variables';
import { TextStyles } from '../../../shared/theme/text.styles';

export const FirstStyles = StyleSheet.create({
  footerText: {
    color: ThemeVariables.navyGreen,
    width: '70%',
    textAlign: 'center',
    fontSize: 11,
    lineHeight:15,
    letterSpacing:0.07,
    fontFamily:TextStyles.rubik.fontFamily,
    marginTop:17,
  },
  terms: {
    color: ThemeVariables.navyGreen,
    fontSize: 11,
    lineHeight:15,
    letterSpacing:0.07,
    fontFamily:TextStyles.rubik.fontFamily,
    textDecorationLine:'underline',
  },
  seperator:{
    color: ThemeVariables.navyGreen,
    fontFamily:TextStyles.rubik.fontFamily,
    fontSize: 11,
    letterSpacing:0.07,
    lineHeight:15,

  },
});
