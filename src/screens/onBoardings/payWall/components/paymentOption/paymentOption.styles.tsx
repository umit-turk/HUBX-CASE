import {StyleSheet} from 'react-native';
import {TextStyles} from '../../../../../shared/theme/text.styles';
import {ThemeVariables} from '../../../../../shared/theme/variables';

export const PaymentOptionStyles = StyleSheet.create({
  container: {
    gap: 16,
  },
  card: {
    borderWidth: 0.5,
    borderColor: 'gray',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    borderRadius: 14,
  },
  circleTick: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
  },
  circleTicked: {
    borderColor: 'rgba(40, 175, 110, 1)',
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderWidth: 8,
    borderRadius: 12,
  },
  selectedCard: {
    borderColor: 'green',
    borderWidth: 1.5,
  },
  paymentInfoContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingLeft: 15,
    paddingVertical: 13,
    alignItems: 'center',
  },
  date: {
    fontWeight: TextStyles.fontWeight('500').fontWeight,
    fontSize: 16,
    lineHeight: 18.96,
    fontFamily: TextStyles.rubik.fontFamily,
    color: 'rgba(255, 255, 255, 1)',
  },
  description: {
    fontFamily: TextStyles.rubik.fontFamily,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    lineHeight: 14.22,
    fontWeight: TextStyles.fontWeight('400').fontWeight,
  },
  save: {
    position: 'absolute',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
    backgroundColor: ThemeVariables.green,
    top: 0,
    right: 0,
    color: ThemeVariables.white,
    lineHeight: 18,
    fontSize: 12,
    fontFamily: TextStyles.rubik.fontFamily,
    fontWeight: TextStyles.fontWeight('500').fontWeight,
    paddingVertical: 4,
    paddingLeft: 12,
    paddingRight: 9,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    borderRadius: 14,
  },
});
