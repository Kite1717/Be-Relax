import React from 'react';
import FirstInitialScreen from '../components/InitialScreens/FirstInitialScreen';
import SecondInitialScreen from '../components/InitialScreens/SecondInitialScreen';
import SignUpScreen from '../components/InitialScreens/SignUpScreen';
import LoginScreen from '../components/InitialScreens/LoginScreen';


import { createStackNavigator } from '@react-navigation/stack'
import Tabs from '../components/Tabs/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen/HomeScreen';

const InitialStack = createStackNavigator();

const InitialStackScreen = () => (

  <InitialStack.Navigator
    headerMode="none"


  >
    <InitialStack.Screen
      name="FirstInitialScreen"
      component={FirstInitialScreen}
    />
    <InitialStack.Screen
      name="SecondInitialScreen"
      component={SecondInitialScreen}
    />
    <InitialStack.Screen
      options={{
        animationEnabled: false,
      }}

      name="SignUpScreen" component={SignUpScreen} />
    <InitialStack.Screen
      options={{
        animationEnabled: false,
      }}

      name="LoginScreen" component={LoginScreen} />

    <InitialStack.Screen
      options={{
        animationEnabled: false,
      }}

      name="HomeScreen" component={HomeScreen} />


  </InitialStack.Navigator>

);

export default InitialStackScreen;
