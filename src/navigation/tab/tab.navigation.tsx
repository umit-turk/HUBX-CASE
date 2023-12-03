import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {TabStyles} from './tab.styles';
import Home from '../../screens/home/home.screen';
import Diagnose from '../../screens/diagnose/diagnose.screen';
import MyGarden from '../../screens/myGarden/mygarden.screen';
import Profile from '../../screens/profile/profile.screen';
import {HomeIcon} from '../../shared/icons/home-icon';
import {ProfileIcon} from '../../shared/icons/profile-icon';
import {HealthCareIcon} from '../../shared/icons/healthcare-icon';
import {MyGardenIcon} from '../../shared/icons/mygarden-icon';
import {TabRoutes} from './tab.routes';
import {TabIcon} from '../../shared/icons/tab-icon';
import Camera from '../../screens/camera/camera.screen';

const Tab = createBottomTabNavigator();

const navigatorScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: TabStyles.bar,
};

const tabIconProps = (name, component, Icon) => {
  const tabBarIcon = ({focused}) => (
    <View style={TabStyles.circleWrapper}>
        <Icon focus={focused} />
    </View>
  );
  const tabScreenOptions = {
    tabBarIcon,
  };
  return {options: tabScreenOptions, name ,component};
};

const tabScreenProps = (name, component, Icon) => {
  const tabBarIcon = ({focused}) => (
    <View style={TabStyles.container}>
      <Icon focus={focused} />
      <Text style={TabStyles.text(focused)}>{name}</Text>
    </View>
  );
  const tabScreenOptions = {
    tabBarIcon,
  };

  return {options: tabScreenOptions, name, component};
};

export const TabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={navigatorScreenOptions}
        backBehavior={'history'}>
        <Tab.Screen {...tabScreenProps(TabRoutes.Home, Home, HomeIcon)} />
        <Tab.Screen {...tabScreenProps(TabRoutes.Diagnose, Diagnose, HealthCareIcon)}/>
        <Tab.Screen {...tabIconProps(TabRoutes.Camera, Camera, TabIcon)} />
        <Tab.Screen {...tabScreenProps(TabRoutes.MyGarden, MyGarden, MyGardenIcon)} />
        <Tab.Screen {...tabScreenProps(TabRoutes.Profile, Profile, ProfileIcon)} />
      </Tab.Navigator>
    </>
  );
};
