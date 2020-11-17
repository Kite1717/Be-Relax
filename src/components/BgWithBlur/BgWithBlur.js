import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
const BgWithBlur = props => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/main_bg.jpg')}
        blurRadius={60}
        style={styles.bgImage}>
        {
          props.visiblePLayer &&
          <AudioPlayer navigation={props.navigation} music={props.music} />
        }

        {props.children}

      </ImageBackground>

    </View>
  );
};

export default BgWithBlur;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',

  },

});
