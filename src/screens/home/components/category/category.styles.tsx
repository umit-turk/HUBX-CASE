import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../../../shared/theme/variables';
import {TextStyles} from '../../../../shared/theme/text.styles';

interface CategoryStyles {
  titleContainer: {
    paddingLeft: number;
    paddingTop: number;
  };
  title: {
    color: string;
    fontFamily: string;
    lineHeight: number;
    letterSpacing: number;
    fontWeight: string;
    fontSize: number;
  };
  imageContainer: {
    position: 'absolute';
    width: '100%';
    height: '100%';
  };
  image: {
    width: '100%';
    height: '100%';
    resizeMode: 'cover';
  };
}

export const CategoryStyles = StyleSheet.create<CategoryStyles>({
  titleContainer: {
    paddingLeft: 16,
    paddingTop: 16,
  },
  title: {
    color: ThemeVariables.main,
    fontFamily: TextStyles.rubik.fontFamily,
    lineHeight: 21,
    letterSpacing: -0.32,
    fontWeight: TextStyles.fontWeight('500').fontWeight,
    fontSize: 16,
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
