import React from 'react';
import SignUpScreen from '../components/InitialScreens/SignUpScreen';
import LoginScreen from '../components/InitialScreens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen/HomeScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
   options={{
    animationEnabled: false,
       }}
    
    name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
