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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap:5,
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
    fontSize: 10,
    lineHeight: 11.85,
    color: focused ? ThemeVariables.green : ThemeVariables.tabTextColor,
  }),
});
