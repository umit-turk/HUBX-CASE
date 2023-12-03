import {StyleSheet} from 'react-native';
import {ThemeVariables} from '../../../../shared/theme/variables';

export const MessageStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#24201A',
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
    backgroundColor: 'rgba(232, 44, 19, 0.9)',
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageCount: {
    color: 'white',
  },
  firstText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: -0.32,
  },
  secondText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
  },
});
