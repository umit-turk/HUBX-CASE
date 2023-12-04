import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../../../shared/theme/variables';
import {TextStyles} from '../../../../shared/theme/text.styles';

export const SearchStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: ThemeVariables.searchBorderBottom,
    position: 'relative',
    zIndex: 2,
    backgroundColor: ThemeVariables.searchBackGround,
  },
  title: {
    color: ThemeVariables.main,
    fontFamily: TextStyles.rubik.fontFamily,
    letterSpacing: 0.07,
    lineHeight: 18.96,
    fontWeight: TextStyles.fontWeight('400').fontWeight,
    fontSize: 16,
    paddingTop:3,
  },
  time: {
    color: ThemeVariables.main,
    fontFamily: TextStyles.rubik.fontFamily,
    letterSpacing: 0.35,
    lineHeight: 28,
    fontWeight: TextStyles.fontWeight('500').fontWeight,
    fontSize: 24,
    marginTop: 6,
    marginBottom: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 24,
    borderColor: ThemeVariables.searchContainer,
    zIndex: 2,
    backgroundColor: ThemeVariables.searchContainerBg,
  },
  iconContainer: {
    paddingLeft: 18,
  },
  input: {
    flex: 1,
    fontFamily: TextStyles.rubik.fontFamily,
    fontSize: 15.5,
    letterSpacing: 0.07,
    paddingLeft: 12,
    fontWeight: TextStyles.fontWeight('400').fontWeight,
    zIndex: 2,
    color:'rgba(175, 175, 175, 1)',
    width:'100%',
  },
  bottomLeftImage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  bottomRightImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
