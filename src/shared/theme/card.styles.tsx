import {StyleSheet} from 'react-native';
import {ThemeVariables} from './variables';

export const CardStyles = StyleSheet.create({
  paywallCard: {
    backgroundColor: ThemeVariables.paywallCardBg,
    heigh: 130,
    width: 156,
    borderRadius: 14,
    padding: 16,
    marginTop: 20,
  },
  questionCard: {
    width: 240,
    height: 164,
    position: 'relative',
  },
  categoryCard: {
    flex: 1,
    height: 152,
    marginVertical: 8,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: ThemeVariables.categoryCardBg,
    borderRadius: 12,
    position: 'relative',
  },
});
