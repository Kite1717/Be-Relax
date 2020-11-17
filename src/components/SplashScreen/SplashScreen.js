import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Video from 'react-native-video';

const SplashScrn = (props) => {
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => SplashScreen.hide(), 1000);

    return () => clearTimeout(timer);
  }, []);  
  return <>
  <View style={{flex: 1}}>
  <Video source={require("../../assets/splash.mp4")}   // Can be a URL or a local file.
  ref={(ref) => {
    this.player = ref
  }}
  resizeMode="cover"                                // Store reference
  onBuffer={this.onBuffer}                // Callback when remote video is buffering
  onError={this.videoError}               // Callback when video cannot be loaded
  style={styles.backgroundVideo} />
  

</View></>;
};

export default SplashScrn;

const styles = StyleSheet.create({


  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});
