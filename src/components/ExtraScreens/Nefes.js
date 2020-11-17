import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native';

import Video from 'react-native-video';
import * as CONSTANTS from '../../Helper/Constants';

const Nefes = ({ navigation, route, isVsblModal, setIsVsblModal, imageUrl }) => {

  const { height } = Dimensions.get('window')

  return (
    <Modal visible={isVsblModal} animationType="slide">

      <StatusBar hidden />
      <View style={{ flex: 1 }} >
         <ImageBackground source={require('../../assets/main_bg.jpg')}
          blurRadius={60}
          style={styles.bgImage}> 
        <Video source={require("../../assets/nefes-egzersiz.mp4")}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          onEnd={() => setIsVsblModal(false)}                                      // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.backgroundVideo} />
         </ImageBackground> 



      </View>
    </Modal>
  );
};

export default Nefes;
const styles = StyleSheet.create({

  bgImage: {
    flex: 1,
    resizeMode: 'cover',

  },
  backgroundVideo: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width
  },


});
