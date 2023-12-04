import {StyleSheet, ViewStyle} from 'react-native';
import {ThemeVariables} from '../../shared/theme/variables';
import {TextStyles} from '../../shared/theme/text.styles';

interface HomeStyles {
  container: ViewStyle;
  getStart: {
    color: string;
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    marginBottom: number;
  };
  listContainer: ViewStyle;
  columnWrapper: ViewStyle;
}

export const HomeStyles = StyleSheet.create<HomeStyles>({
  container: {
    backgroundColor: ThemeVariables.lightWhite,
  },
  getStart: {
    color: ThemeVariables.main,
    fontFamily: TextStyles.rubik.fontFamily,
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginBottom: 16,
  },
  listContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  columnWrapper: {
    marginHorizontal: -16,
  },
});
