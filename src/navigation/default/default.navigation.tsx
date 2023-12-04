import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultRoutes} from './default.routes';
import Header from '../../shared/ui/header/header';
import First from '../../screens/onBoardings/first/first.screen';
import Second from '../../screens/onBoardings/second/second.screen';
import Third from '../../screens/onBoardings/third/third.screen';
import PayWall from '../../screens/onBoardings/payWall/paywall.screen';
import {ThemeVariables} from '../../shared/theme/variables';

const Stack = createNativeStackNavigator();

export const DefaultNavigation: React.FC = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{
            header: () => (
              <Header
                title={'Welcome to'}
                text={'Identify more than 3000+ plants and 88% accuracy.'}
                boldTitle={'PlantApp'}
                onboardingNumber={1}
              />
            ),
            animation: 'slide_from_right',
            statusBarColor: ThemeVariables.white,
            statusBarStyle: 'dark',
          }}
          name={DefaultRoutes.Onboardings.First}
          component={First}
        />
        <Stack.Screen
          options={{
            header: () => (
              <Header
                title={'Take a photo to'}
                subTitle={'the plant!'}
                boldTitle={'identify'}
                onboardingNumber={2}
              />
            ),
            animation: 'slide_from_right',
            statusBarColor: ThemeVariables.white,
            statusBarStyle: 'dark',
          }}
          name={DefaultRoutes.Onboardings.Second}
          component={Second}
        />
        <Stack.Screen
          options={{
            header: () => (
              <Header
                title={'Get plant'}
                boldTitle={'care guides'}
                onboardingNumber={3}
              />
            ),
            animation: 'slide_from_right',
            statusBarColor: ThemeVariables.white,
            statusBarStyle: 'dark',
          }}
          name={DefaultRoutes.Onboardings.Third}
          component={Third}
        />
        <Stack.Screen
          options={{headerShown: false, animation: 'slide_from_right'}}
          name={DefaultRoutes.Onboardings.PayWall}
          component={PayWall}
        />
      </Stack.Navigator>
    </>
  );
};
