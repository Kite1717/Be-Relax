import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import Spinner from '../CustomComponents/Spinner';

const LauchScreen = props => {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require('./launch_screen.png')}
        blurRadius={60}
        style={styles.bgImage}>
        <Spinner />
        {props.children}
      </ImageBackground>
    </View>
  );
};

export default LauchScreen;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
