import {StyleSheet} from 'react-native';
import {TextStyles} from '../../theme/text.styles';
import {ThemeVariables} from '../../theme/variables';

const baseStyle = {
  color: ThemeVariables.main,
  fontFamily: TextStyles.rubik.fontFamily,
  fontSize: TextStyles.xLarge.fontSize,
  fontWeight: TextStyles.fontWeight('500').fontWeight,
  letterSpacing: -1,
  lineHeight: 33.18,
};

const titles = {
  1: {
    ...baseStyle,
    fontWeight: TextStyles.fontWeight('300').fontWeight,
    letterSpacing: 0.07,
  },
  2: {
    ...baseStyle,
  },
  3: {
    ...baseStyle,
  },
};

const boldTitles = {
  1: {
    ...baseStyle,
    fontWeight: TextStyles.fontWeight('400').fontWeight,
    letterSpacing: 0.07,
  },
  2: {
    ...baseStyle,
    fontWeight: TextStyles.fontWeight('800').fontWeight,
  },
  3: {
    ...baseStyle,
    fontWeight: TextStyles.fontWeight('800').fontWeight,
  },
};

export const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFFFE',
    paddingTop:12,
  },
  boldTitleImageContainer: {position: 'relative'},
  headerImage: {position: 'absolute', top: 30, left: -10},
  onBoardingTitle: number => {
    return {
      ...titles[number],
    };
  },
  onBoardingBoldTitle: number => {
    return {
      ...boldTitles[number],
    };
  },
  text: {
    fontFamily: TextStyles.rubik.fontFamily,
    fontWeight: TextStyles.fontWeight('400').fontWeight,
    color: 'rgba(19, 35, 27, 0.7)',
    fontSize: TextStyles.medium.fontSize,
    letterSpacing: 0.07,
    marginTop: 8,
  },
});
