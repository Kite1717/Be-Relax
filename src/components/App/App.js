import React from 'react';
import { View, StatusBar, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import SplashScreen from '../SplashScreen/SplashScreen';
import Auth from '../Auth/Auth';
import { YellowBox } from "react-native";

import mainImage from '../../assets/main_bg.jpg'


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//temp code remove pls
YellowBox.ignoreWarnings([""]);
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',

  },
};
const App = () => {

  const timer = React.useRef(null);
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    timer.current = setTimeout(() => setShow(false), 5000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <SafeAreaView>
      <NavigationContainer theme={MyTheme} >
        <ImageBackground
          source={mainImage}
          style={styles.bgImage}
          blurRadius={100}
        >
          <StatusBar hidden />

          <View style={{ flex: 1 }}>
            {show &&
              <SplashScreen />
            }
            {
              !show &&
              <Auth />
            }
          </View>
        </ImageBackground>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({

  bgImage: {
    width: wp('100'), height: hp('100'), position: 'absolute',
    backgroundColor: 'transparent',


  },

})



