import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultNavigation} from './default/default.navigation';
import {Routes} from './routes';
import {TabNavigation} from './tab/tab.navigation';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export const navigationRef = React.createRef();

export const Navigation = () => {
  const onBoardingComplete = useSelector((state) => state.markState.onboardingComplete);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       {!onBoardingComplete && <Stack.Screen name={Routes.Default} component={DefaultNavigation} />}
        <Stack.Screen name={Routes.Tab} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};