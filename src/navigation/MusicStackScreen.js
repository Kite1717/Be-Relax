import React from 'react';
import SignUpScreen from '../components/InitialScreens/SignUpScreen';
import LoginScreen from '../components/InitialScreens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MusicModal from '../components/MusicListScreen/MusicModal'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import MusicCard from '../components/Cards/MusicCard'

const MusicStack = createStackNavigator();

const MusicStackScreen = () => (
  <MusicStack.Navigator headerMode="none">
    <MusicStack.Screen

      name="AudioPlayer" component={AudioPlayer} />

    <MusicStack.Screen name="MusicCard" component={MusicCard} />
    <MusicStack.Screen name="MusicModal" component={MusicModal} />


  </MusicStack.Navigator>
);

export default MusicStackScreen;
