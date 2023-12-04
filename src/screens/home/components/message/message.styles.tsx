import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../../../shared/theme/variables';
import { TextStyles } from '../../../../shared/theme/text.styles';

export const MessageStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: ThemeVariables.lightBlack,
    marginHorizontal: 24,
    borderRadius: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 13,
  },
  imageContainer: {
    position: 'relative',
  },
  messageCountContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: ThemeVariables.danger,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageCount: {
    color: ThemeVariables.white,
  },
  firstText: {
    fontSize: 16,
    fontWeight: TextStyles.fontWeight('600').fontWeight,
    lineHeight: 21,
    letterSpacing: -0.32,
  },
  secondText: {
    fontWeight: TextStyles.fontWeight('400').fontWeight,
    fontSize: 13,
    lineHeight: 16,
  },
});
