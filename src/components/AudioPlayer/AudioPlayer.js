import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { BlurView } from '@react-native-community/blur';
import * as Progress from 'react-native-progress';
import Play from '../../icons/play';
import Stop from '../../icons/stop';
import { WhiteText } from '../CustomComponents/CustomText';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicModal from '../MusicListScreen/MusicModal'
import { MusicContext } from "../Tabs/Tabs"
import MarqueeText from "react-native-marquee"


const AudioPlayer = ({ navigation,route, backgroundColor }, props) => {
  
  const music = React.useContext(MusicContext)
  const [isVsblModal, setIsVsblModal] = React.useState(false);
  const [play, setPlay] = React.useState(false)


  useEffect(() => {

    if (music.isPlaying) {
      setPlay(true)
    } else {
      setPlay(false)
    }
  }, [music.isPlaying])

  useEffect(() => {
    if (music.timePercent === 1) {
      music.setIsPlaying(false)
    }
  }, [music.timePercent])


  const openModal = () => {
    
    setIsVsblModal(true)
  }
  const setIcon = () => {

    if (!play) {
      return <Play onPress={() => music.continueMusic()} style={{ right: '30%', marginLeft: '45%' }} fill="white" width="30" height="30" opacity={0.8} />

    }
    else {
      return <Stop onPress={() => music.pauseMusic()} style={{ right: '30%', marginLeft: '45%' }} fill="white" width="30" height="30" opacity={0.8} />

    }
  }
  
  const getAudioStyle = () => {

    return {
      backgroundColor,

      padding: CONSTANTS.SCREEN_WIDTH / 25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderWidth: 0.1,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      borderColor: '#C4C4C4',

      overflow: 'hidden',
      height: CONSTANTS.heightPercentage(15),
      position: 'absolute',
      bottom: 0,
      zIndex: 1000,

      shadowColor: "#0000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,

    }

  }

  return (
    <>
      {
        music.hidden &&
        <View

          style={getAudioStyle()}>

<MusicModal
        isVsblModal={isVsblModal}
        setIsVsblModal={val => setIsVsblModal(val)}
        item = {music.album}
        play = {play}
        setPlay = {setPlay}
        setIcon = {setIcon}
      />

          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={25}
            reducedTransparencyFallbackColor="white"
          />

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <WhiteText style={{ marginBottom: 10 }}>{music.currTime}</WhiteText>
              <TouchableHighlight
              >
                {
                  setIcon()
                }

              </TouchableHighlight>
            </View>
            <Progress.Bar
              progress={music.timePercent}
              width={200}
              unfilledColor="gray"
              borderColor="gray"
              width={75}
            />
          </View>

          <View

            style={{ marginLeft: -150 }}>
            <MarqueeText
              style={{ width: 100 }}
              duration={3000}
              marqueeOnStart
              loop
              marqueeDelay={1000}
              marqueeResetDelay={1000}
            >
              <Text style={styles.playerText}>{music.music.name}</Text>
            </MarqueeText>

          </View>
          <View>

            <TouchableWithoutFeedback
              onPress={() => openModal()}
            >
              <View


                style={styles.themeCircle}>
                <ImageBackground
                  source={{ uri: music.currAlbum.images.banner }}
                  style={styles.bgImg}

                />
              </View>
            </TouchableWithoutFeedback>
          </View>

          
        </View>
        
      }
      
    </>


  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  
  absolute: {
    position: 'absolute',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  themeCircle: {
    height: 50,
    width: 50,
    borderRadius: 60,
    overflow: 'hidden',
    position: 'relative',
  },
  bgImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  playerText: {
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 'bold',
    fontSize: 14,
  }

});
