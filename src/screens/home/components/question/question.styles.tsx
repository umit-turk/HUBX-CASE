import {StyleSheet} from 'react-native';
import { TextStyles } from '../../../../shared/theme/text.styles';
import { ThemeVariables } from '../../../../shared/theme/variables';

export const QuestionStyles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 12,
},
textContainer:{
    position: 'absolute',
    height:64,
    bottom:0,
    left: 14,
    right:14,
    flexDirection: 'row',
    flexWrap:'wrap',
    paddingTop:11,
},
title:{
    fontFamily:TextStyles.rubik.fontFamily,
    fontWeight:TextStyles.fontWeight('400').fontWeight,
    fontSize:15,
    lineHeight:20,
    letterSpacing:-0.24,
    color:ThemeVariables.white,
},
subTitle:{
    fontFamily:TextStyles.rubik.fontFamily,
    fontWeight:TextStyles.fontWeight('500').fontWeight,
    fontSize:15,
    lineHeight:20,
    letterSpacing:-0.24,
    color:ThemeVariables.white,
},
});
