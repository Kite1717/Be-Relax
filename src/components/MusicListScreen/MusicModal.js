'use strict'

import React, { useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  StatusBar
} from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Slider from "react-native-slider"
import BgWithBlur from "../BgWithBlur/BgWithBlur"


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

import MusicCard from '../Cards/MusicCard';
import * as CONSTANTS from '../../Helper/Constants';

import { WhiteText } from '../CustomComponents/CustomText';

//
import mainImage from '../../assets/main_bg.jpg'

import { MusicContext } from "../Tabs/Tabs";

//icons
import CloseIcon from '../../icons/Close'
import DownloadIcon from '../../icons/Download'
import HeartIcon from '../../icons/HeartIcon'
import LeftIcon from '../../icons/Left15'
import Right15Icon from '../../icons/Right15'
import UploadIcon from '../../icons/Uplaod'
import PauseIcon from '../../icons/Pause'
import MuteIcon from '../../icons/Mute'
import TimeBarIcon from '../../icons/TimeBar'
import { set } from 'react-native-reanimated';

const MusicModal = ({ navigation, route, isVsblModal, setIsVsblModal, item, play, setPlay, setIcon }) => {

  const music = React.useContext(MusicContext);
  const [loading, setLoading] = React.useState(true)
  const [musicItem, setMusicItem] = React.useState();
  React.useEffect(() => {
    if (item !== null && item !== undefined) {
      setMusicItem(item)
    }
    console.log(item, "item in music modallll")
  }, [])

  const handleValueChange = (value) => {
    if (music.currentMusic) {
      music.currentMusic.setCurrentTime(value)
      if (play) {
        music.currentMusic.play()
      } else {
        music.currentMusic.pause()
      }

    }
  }




  const formatTime = (seconds) => {
    seconds = Math.floor(seconds)

    let min = Math.floor(Number(seconds) / 60);
    let sec = Number(seconds) - (min * 60);

    if (sec < 10) {
      return min + ":0" + sec;
    } else {
      return min + ":" + sec;
    }
  }

  const handleSeconds = (second) => {
    music.currentMusic.getCurrentTime((seconds) => {
      if (second === -15 && seconds < 15) {
        music.currentMusic.setCurrentTime(0)
        music.setSecond(0)
        music.setCurrTime(formatTime(0))
      } else if (second === 15 && seconds >= (music.currentMusic.getDuration() - 15)) {
        music.currentMusic.setCurrentTime(music.currentMusic.getDuration() - 1)
        music.setSecond(music.currentMusic.getDuration() - 1)
      } else {
        music.currentMusic.setCurrentTime(seconds + second)
        music.setSecond(seconds + second)
        music.setCurrTime(formatTime(seconds + second))
      }


    })

  }


  return (
    <>


      <Modal animationIn="fadeIn" animationOut="fadeOut" visible={isVsblModal} animationType="slide" transparent >

        <StatusBar hidden />
        {
          item !== null && item !== undefined &&

          <View style={styles.modal}>


            <ImageBackground
              source={{ uri: music.currAlbum.images.modal }}

              // onLoad={e => alert("onLoad")}
              onLoadEnd={e =>

                setTimeout(() => {


                  setLoading(false)

                }, 500)

              }

              style={styles.bgImage}>


              {
                loading ?
                  <>
                  </>
                  :

                  <>


                    <SafeAreaView style={{ opacity: 0 }} />
                    <View style={{ flex: 1 }}>



                      <View
                        style={{
                          position: 'absolute',
                          top: '2%',
                          left: 0,
                        }}>

                        <View style={styles.iconContainer}>
                          <TouchableWithoutFeedback onPress={setIsVsblModal}>
                            <CloseIcon style={styles.back} width="45" height="45" />
                          </TouchableWithoutFeedback>


                          <DownloadIcon style={styles.download} width="45" height="45" />
                        </View>



                      </View>


                      <View style={styles.detailContainer}>
                        <WhiteText theme={{ textAlign: 'center', }}>
                          DIŞ SES {'\n'} {music.currAlbum.teller}
                        </WhiteText>
                        <WhiteText theme={{ textAlign: 'center', }}>
                          YAZAR {'\n'} {music.currAlbum.author}
                        </WhiteText>



                      </View>


                      <View style={styles.footerTabContainer}>
                        {/* <HeartIcon style={styles.like} width="40" height="40" /> */}
                        <View


                          style={styles.themeCircle}>
                          <ImageBackground
                            source={{ uri: music.currAlbum.images.author }}
                            style={styles.bgImg}
                          />
                        </View>
                        {/* <UploadIcon style={styles.like} width="40" height="40" /> */}




                      </View>

                      <View
                        style={styles.titleStyle}>


                        <WhiteText >{music.currAlbum.author}</WhiteText>




                      </View>

                      <View style={styles.playerContainer}>
                        <TouchableWithoutFeedback
                          onPress={() => handleSeconds(-15)}
                        >
                          <LeftIcon style={styles.left} width="30" height="30" />
                        </TouchableWithoutFeedback>

                        {setIcon()}
                        <TouchableWithoutFeedback
                          onPress={() => handleSeconds(15)}
                        >
                          <Right15Icon style={styles.like} width="30" height="30" />
                        </TouchableWithoutFeedback>

                      </View>
                      <View style={styles.progbar}>

                        <Slider
                          id="slider"
                          thumbStyle={{ height: 10, width: 20, borderRadius: 50 }}
                          onValueChange={handleValueChange}
                          value={music.second} maximumValue={music.currentMusic.getDuration()} maximumTrackTintColor='gray' minimumTrackTintColor='white' thumbTintColor='white'
                          style={{ flex: 1, alignSelf: 'center', marginHorizontal: Platform.select({ ios: 5 }) }}
                        />

                      </View>


                      <View
                        style={styles.durations}>



                        <View
                          style={styles.begin}>

                          <WhiteText  >{music.currTime}</WhiteText>
                        </View>
                        <View
                          style={styles.end}>

                          <WhiteText  >{formatTime(music.currentMusic.getDuration())}</WhiteText>
                        </View>


                      </View>

                    </View>

                    <SafeAreaView style={{ opacity: 0 }} />

                  </>
              }
            </ImageBackground>
          </View>

        }

      </Modal>


    </>


  );
};

export default MusicModal;
const styles = StyleSheet.create({
  modal: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  bgImage: {
    height: null,
    width: wp('100%'),
    resizeMode: "cover",
    overflow: "hidden",
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0)',

  },
  bodyContainer: {
    flexGrow: 1,
  },
  iconContainer: {
    flex: 1,
    width: (CONSTANTS.SCREEN_WIDTH * 4) / 4.5,

    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  detailContainer: {
    flex: 1,


    top: (CONSTANTS.heightPercentage(50) * 4) / 4.5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  back: {
    marginLeft: '10%'
  },
  author: {

  },
  title: {
    position: 'absolute',
    top: (CONSTANTS.heightPercentage(30) * 4) / 4.5,
    textAlign: 'center',
    width: '50%',
  },
  footerTabContainer: {

    flex: 1,
    top: (CONSTANTS.heightPercentage(17) * 4) / 2.5,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  like: {
    marginTop: '4%'

  },
  left: {
    marginTop: '4%',
    marginLeft: '13%',

  },
  pause: {
    marginTop: '4%',
    marginHorizontal: '13%',
  },
  mute: {
    marginTop: '4%',
    marginLeft: '13%',
  },
  bgImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  themeCircle: {
    marginHorizontal: '8%',
    height: 70,
    width: 70,
    borderRadius: 60,
    overflow: 'hidden',
    position: 'relative',
  },
  titleStyle: {


    top: hp('8'),
    left: wp('30%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',



    width: '40%',
    height: '5%',





    borderRadius: 20,
    backgroundColor: 'rgba(108,122,137,0.7)',

  },
  playerContainer: {
    flex: 1,
    left: CONSTANTS.SCREEN_WIDTH * 0.001,
    width: (CONSTANTS.SCREEN_WIDTH * 4) / 4.5,
    top: (CONSTANTS.heightPercentage(17) * 4) / 5,
    flexDirection: 'row',
    justifyContent: 'center'

  },
  progbar: {

    position: 'absolute',
    bottom: CONSTANTS.heightPercentage(11),
    width: (CONSTANTS.SCREEN_WIDTH * 4) / 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: wp('10'),
    marginTop: "-30%"
  },
  durations: {
    position: 'absolute',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    bottom: CONSTANTS.heightPercentage(7),
    left: wp('7'),
  },
  begin: {

    marginRight: '70%',
  }


});
