import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../components/ExtraScreens/SettingsScreen/SettingsScreen';
import AccInfoScreen from '../components/ExtraScreens/SettingsScreen/AccInfoScreen';
import UpdAccScreen from '../components/ExtraScreens/SettingsScreen/UpdAccScreen';
import UpdPassScreen from '../components/ExtraScreens/SettingsScreen/UpdPassScreen';
import AboutScreen from '../components/ExtraScreens/SettingsScreen/AboutScreen';
import DownloadsScreen from '../components/ExtraScreens/SettingsScreen/DownloadsScreen';
import AttentionReminder from '../components/ExtraScreens/SettingsScreen/AttentionReminder';
import SleepReminder from '../components/ExtraScreens/SettingsScreen/SleepReminder';
import AppReminder from '../components/ExtraScreens/SettingsScreen/AppReminder';



const SettingsStack = createStackNavigator();

const ExtraStackScreen = () => (
  <SettingsStack.Navigator headerMode="none">
    <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    <SettingsStack.Screen name="AccInfoScreen" component={AccInfoScreen} />
    <SettingsStack.Screen name="UpdAccScreen" component={UpdAccScreen} />
    <SettingsStack.Screen name="UpdPassScreen" component={UpdPassScreen} />
    <SettingsStack.Screen name="AboutScreen" component={AboutScreen} />
    <SettingsStack.Screen name="DownloadsScreen" component={DownloadsScreen} />
    <SettingsStack.Screen
      name="AttentionReminder"
      component={AttentionReminder}
    />
    <SettingsStack.Screen name="SleepReminder" component={SleepReminder} />
    <SettingsStack.Screen name="AppReminder" component={AppReminder} />

   
  </SettingsStack.Navigator>
);

export default ExtraStackScreen;
