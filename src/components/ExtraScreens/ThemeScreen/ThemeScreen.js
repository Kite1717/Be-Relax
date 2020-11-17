import React, { useEffect } from 'react';
import Slider from "react-native-slider"
import Sound from "react-native-sound"
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { WhiteText } from '../../CustomComponents/CustomText';
import * as CONSTANTS from '../../../Helper/Constants';

import firestore from '@react-native-firebase/firestore'


import { AuthContext } from '../../Auth/Auth'
import { MusicContext } from "../../Tabs/Tabs"

import Spinner from '../../CustomComponents/Spinner'

const ThemeScreen = () => {

  const user = React.useContext(AuthContext)
  const music = React.useContext(MusicContext)
  const [data, setData] = React.useState([])

  const [loading, setLoading] = React.useState(false)
  const [change, setChange] = React.useState(true)



  useEffect(() => {
    let radiusMatch = user.userFeatures.defaultTheme.imageUrl;
    let temp = [];
    firestore().collection("themes").get().then(querySnaphots => {
      querySnaphots.docs.map(doc => {
        if (doc.data().blob) {
        } else {
          temp.push({
            name: doc.data().name,
            imageUrl: doc.data().image,
            soundUrl: doc.data().sound,
            radius: radiusMatch === doc.data().image ? 0 : 50,
          })
        }
      })
    }).then(() => {
      setData(temp)
    })

    if (music.isPlaying) {
      music.currentMusic.pause();
    }


    return () => {
      if (music.isPlaying) {
        music.currentMusic.play();
      }

    }

  }, [])


  const handleTheme = (item) => {
    console.log(item)
    music.themeSound.stop();
    music.setThemeSound(null)
    setChange(!change)


    let temp = [];

    data.map(theme => {

      if (theme.radius === 0) {
        theme.radius = 50
      }

      if (theme.imageUrl === item.imageUrl) {
        theme.radius = 0
      }

      temp.push(theme)
    })

    setData(temp)

    let newTheme;


    let promise = new Promise(() => {
      newTheme = new Sound(
        item.soundUrl,
        null,
        error => {
          if (error) {
            console.log(error)
          }
        }
      )
    })
    Promise.all(promise).then(() => {

      setTimeout(() => {
        if (music.themeSound !== null && music.themeSound !== undefined) {

          if (music.isPlaying) {
            console.log(music.themeSound, "themeSoundd")
            newTheme.setNumberOfLoops(-1)
            newTheme.setVolume(music.themeSoundVolume)
            if (!music.isMusicAlbum) {
              newTheme.play();
            }

          }
          console.log("tema değişmiş kardeşş")
          console.log(music.isPlaying, "isPlaying")
        }
        music.setThemeSound(newTheme)
      }, 3000);
    })

    firestore()
      .collection('users')
      .doc(user.user.uid).update({
        defaultTheme: {
          imageUrl: item.imageUrl,
          soundUrl: item.soundUrl
        }
      })
    user.userFeatures.defaultTheme.imageUrl = item.imageUrl
  }




  const handleSlideStart = (value) => {
    music.setThemeSoundVolume(value)
    music.themeSound.setVolume(value)
  }


  return (
    <BgWithBlur visiblePLayer={false}>


      <View
        style={{
          height: CONSTANTS.heightPercentage(10),
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        <WhiteText theme={styles.textStyle}>Tema</WhiteText>
        <View style={styles.hrStyle}></View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: CONSTANTS.heightPercentage(30),
        }}>
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            onPress={() => {
              if (item.radius != 0) {
                handleTheme(item)
              }
            }}
            style={{ justifyContent: 'center', alignItems: 'center' }}
            key={index.toString()}>
            <View style={styles.themeCircle}>
              <ImageBackground
                source={{ uri: item.imageUrl }}  //** */
                style={styles.bgImg}  //** */
                blurRadius={item.radius}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}

              />
              {
                loading &&
                <Spinner />
              }
              <View
                style={{


                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                <Text style={styles.themeInfo}>{item.name}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>

      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0)',
          height: CONSTANTS.heightPercentage(20),
          marginBottom: "50%",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.themeInfo}>Tema Sesi</Text>
        <Slider
          onSlidingComplete={handleSlideStart}
          thumbStyle={{
            cx: 26.57,
            cy: 6.57,
            r: 26.57,
            fill: "none",
            stroke: "#fff",
            strokeMiterlimit: 10,
            strokeWidth: 5,
            opacity: 0.5
          }}
          value={music.themeSoundVolume} maximumValue={1} maximumTrackTintColor='gray' minimumTrackTintColor='white' thumbTintColor='white'
          style={{ flex: 1, alignSelf: 'center', width: (CONSTANTS.SCREEN_WIDTH / 1.5) }}
        />

        {/* <VolumeIcon width={CONSTANTS.SCREEN_WIDTH / 1.13} height="100" />  */}
      </View>
    </BgWithBlur>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  themeCircle: {
    height: 150,
    width: 150,
    borderRadius: 350,
    overflow: 'hidden',
    margin: CONSTANTS.albumCardMargin * 2,
    position: 'relative',
  },
  bgImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  themeInfo: {
    overflow: 'hidden',
    borderRadius: 12,
    width: '80%',
    padding: 3,
    backgroundColor: 'rgba(87, 87, 86, 0.6)',

    fontSize: 16,
    color: 'white',
    textAlign: 'center',




  },
  volume: {

    width: 500,
  },
  hrStyle: {
    marginLeft: wp('2%'),
    marginTop: wp('3%'),
    width: '50%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: wp('2%'),
    marginLeft: wp('50%'),

  },
});
