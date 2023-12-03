import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../../shared/theme/variables';
import {TextStyles} from '../../../shared/theme/text.styles';

export const PayWallStyles = StyleSheet.create({
  container: {
    backgroundColor: ThemeVariables.bgPaywall,
    gap: 40,
  },
  firstContainer: {
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: '5%',
    right: 20,
    height: 24,
    width: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  paywallWrapper: {
    position: 'absolute',
    top: '55%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  plantApp: {
    color: ThemeVariables.white,
    fontSize: 30,
    fontWeight: TextStyles.fontWeight('800').fontWeight,
    lineHeight: 46.8,
    fontFamily: TextStyles.rubik.fontFamily,
  },
  premium: {
    color: ThemeVariables.white,
    fontSize: TextStyles.xxLarge.fontSize,
    fontWeight: TextStyles.fontWeight('300').fontWeight,
    lineHeight: 32,
    fontFamily: TextStyles.rubik.fontFamily,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 17,
    fontWeight: TextStyles.fontWeight('300').fontWeight,
    lineHeight: 24,
    fontFamily: TextStyles.rubik.fontFamily,
    letterSpacing: 0.38,
  },
  footerDescriotion: {
    color: 'rgba(255, 255, 255, 0.52)',
    fontSize: 9,
    fontWeight: TextStyles.fontWeight('300').fontWeight,
    lineHeight: 11.88,
    fontFamily: TextStyles.rubik.fontFamily,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  footerLinks: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 11,
    fontWeight: TextStyles.fontWeight('400').fontWeight,
    lineHeight: 13.04,
    fontFamily: TextStyles.rubik.fontFamily,
    letterSpacing: 0.38,
    textAlign: 'center',
  },
});
