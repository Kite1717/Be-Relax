import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsStackScreen from './SettingsStackScreen';
import ExtraScreens from '../components/ExtraScreens/ExtraScreens';
import ProfileScreen from '../components/ExtraScreens/ProfileScreen/ProfileScreen';
import ThemeScreen from '../components/ExtraScreens/ThemeScreen/ThemeScreen';
import HomeScreen from '../components/HomeScreen/HomeScreen';

const ExtraStack = createStackNavigator();

const ExtraStackScreen = () => (
  <ExtraStack.Navigator headerMode="none">
    <ExtraStack.Screen name="ExtraScreens" component={ExtraScreens} />
    <ExtraStack.Screen name="ProfileScreen" component={ProfileScreen} />
    <ExtraStack.Screen name="ThemeScreen" component={ThemeScreen} />

    <ExtraStack.Screen name="HomeScreen" component={HomeScreen} />
    <ExtraStack.Screen
      name="SettingsStackScreen"
      component={SettingsStackScreen}
    />
 


  </ExtraStack.Navigator>
);

export default ExtraStackScreen;
