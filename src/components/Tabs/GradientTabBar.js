import React, {useState, useEffect} from 'react';
import * as CONSTANTS from '../../Helper/Constants';

import {TouchableOpacity, Keyboard, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientTabBar = ({state, descriptors, navigation}) => {
  const [showTab, setShowTab] = useState(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowTab(false);
  };

  const _keyboardDidHide = () => {
    setShowTab(true);
  };
  return (
    <LinearGradient
      colors={['#5d5d5d', '#111']}
      style={{
        flexDirection: 'row',
        height: CONSTANTS.DEVICE.BOTTOM_MENU_HEIGHT,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        if (route.name === 'MusicListScreen' || route.name === "AudioPlayer" || 
        
        route.name === 'MusicPage' ||  route.name === 'MusicCard' || 
        
        route.name === "SettingsScreen" ||   route.name === "MusicStackScreen") {
          return;
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {options.tabBarIcon(isFocused)}
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

export default GradientTabBar;
