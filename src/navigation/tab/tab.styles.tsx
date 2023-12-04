import {Platform, StyleSheet} from 'react-native';
import {ThemeVariables} from '../../shared/theme/variables';

export const TabStyles = StyleSheet.create({
  bar: {
    backgroundColor: ThemeVariables.tabBackground,
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 84 : 60,
  },
  container: {
    padding: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  circleWrapper: {
    width: 64,
    height: 64,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: ThemeVariables.secondGreen,
    backgroundColor: ThemeVariables.green,
    justifyContent: 'center',
    alignItems: 'center',
    top: -23,
  },
  text: focused => ({
    fontSize: 12,
    lineHeight: 18,
    color: focused ? ThemeVariables.green : ThemeVariables.tabTextColor,
  }),
});
