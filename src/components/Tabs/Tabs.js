import React from 'react';
import { AppState } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '../../iconsForTab/HomeIcon';
import MeditationIcon from '../../iconsForTab/MedidationIcon';
import MoonIcon from '../../iconsForTab/MoonIcon';
import StarIcon from '../../iconsForTab/StarIcon';
import MusicIcon from '../../iconsForTab/MusicIcon';
import GradiantTabBar from './GradientTabBar';

import HomeScreen from '../HomeScreen/HomeScreen';
import MedidationScreen from '../MeditationScreen/MeditationScreen';
import MusicScreen from '../MusicScreen/MusicScreen';
import SleepScreen from '../SleepScreen/SleepScreen';
import MusicListScreen from '../MusicListScreen/MusicList';
import Sound from 'react-native-sound';
import MusicModal from "../MusicListScreen/MusicModal"

import ExtraStackScreen from '../../navigation/ExtraStackScreen';
import { AuthContext } from "../Auth/Auth"

import MusicCard from '../Cards/MusicCard'
import MusicStackScreen from '../../navigation/MusicStackScreen'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import firestore from '@react-native-firebase/firestore'
import BackgroundTimer from 'react-native-background-timer';
import App from '../App/App';

const Tab = createBottomTabNavigator();

export const MusicContext = React.createContext(null);


const Tabs = () => {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(appState.current);
  const auth = React.useContext(AuthContext)
  const [music, setMusic] = React.useState({ name: "", url: "" })
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currTime, setCurrTime] = React.useState(null)
  const [timePercent, setTimePercent] = React.useState(null);
  const [albumMusics, setAlbumMusics] = React.useState([]);
  const [album, setAlbum] = React.useState();
  const [second, setSecond] = React.useState();
  const [currAlbum, setCurrAlbum] = React.useState();
  const [fav, setFav] = React.useState(false)
  const [currentMusic, setCurrentMusic] = React.useState({reset(){}, release(){ },stop() { return -1}, getCurrentTime() { }, getDuration() { }, pause() { } })
  const [hidden, setHidden] = React.useState(false)
  const [theme, setTheme] = React.useState(null);
  const [themeSound, setThemeSound] = React.useState({ stop() { }, reset(){} });
  const [themeSoundVolume, setThemeSoundVolume] = React.useState(0.5)
  const [favoriteAlbums, setFavoriteAlbums] = React.useState([])
  const [isMusicAlbum, setIsMusicAlbum] = React.useState(false)
  const [isPlayClickable, setIsPlayClickable] = React.useState(true)
  const [soundCount, setSoundCount] = React.useState(1)
  const refMusic = React.useRef(currentMusic)
  const refTheme = React.useRef(themeSound)
  


  React.useEffect(() => {
    refMusic.current = currentMusic
    refTheme.current = themeSound
  }, [currentMusic, themeSound])


  React.useEffect(() => {
    Sound.setCategory('Playback', true)

    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, [])

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    } else {
      onBackground();
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };

  const onBackground = () => {
    refMusic.current.pause();
    refTheme.current.pause();
    setIsPlaying(false)
  }

  React.useEffect(() => {

    console.log(auth.userFeatures, "asabımı bozma laaannn")
    if (auth.userFeatures !== null && auth.userFeatures !== undefined) {
      console.log("içerdeyim dayıııı")
      setTheme(auth.userFeatures.defaultTheme)
      setFavoriteAlbums(auth.userFeatures.likedAlbums)
      setThemeSound(new Sound(
        auth.userFeatures.defaultTheme.soundUrl,
        Sound.MAIN_BUNDLE,
        error => {
          if (error)

            console.log(error, "sdasdasdsadsadasdasd")
        }
      ))
    }
  }, [auth.userFeatures])

  const playMusic = (music1) => {
    BackgroundTimer.stopBackgroundTimer();
    setIsPlayClickable(false)
    console.log(themeSound)
    currentMusic.stop();
    themeSound.stop();
    let newMusic = null;


    newMusic = new Sound(
      music1.url,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log(error)
        } else {
          setIsPlaying(true)
          console.log("müzik başladı")
          themeSound.setNumberOfLoops(-1)
          setCurrAlbum(album)
          themeSound.setVolume(themeSoundVolume)
          setMusic(music1)
          newMusic.play();
          if (!isMusicAlbum) {
            themeSound.play()
          }
          setCurrentMusic(newMusic)
          setIsPlayClickable(true)
          themeSound.setVolume(themeSoundVolume)
          getTime(newMusic);
          setHidden(true)
        }
      }
    )

  }
  React.useEffect(() => {
    const index = albumMusics.indexOf(music)
    if (index !== -1 && currTime === format()) {
      if (index !== (soundCount - 1) && index + 1 <= soundCount - 1) {
        BackgroundTimer.stopBackgroundTimer()
        playMusic(albumMusics[index + 1])
      }
      else {
        BackgroundTimer.stopBackgroundTimer()
        setCurrTime("0:00")
        setSecond(0)
        setTimePercent(0)
        currentMusic.stop()
        themeSound.stop()
        setIsPlaying(false)
      }

    }

  }, [currTime])

  const format = () => {
    let seconds1 = Math.floor(currentMusic.getDuration())


    let min = Math.floor(Number(seconds1) / 60);
    let sec = Number(seconds1) - (min * 60) - 1;

    if (sec < 10) {
      return min + ":0" + sec;
    } else {
      return min + ":" + sec;
    }
  }

  const handleFav = () => {
    setFav(!fav)
    return
  }

  const onLogout = () => {
    currentMusic.stop();
    themeSound.stop();
    BackgroundTimer.stopBackgroundTimer();
  }

  const formatTime = (seconds, newMusic) => {
    seconds = Math.floor(seconds)
    if (newMusic !== null && newMusic !== undefined) {
      setTimePercent(((seconds * 100) / Math.floor(newMusic.getDuration())) / 100)
    }
    let min = Math.floor(Number(seconds) / 60);
    let sec = Number(seconds) - (min * 60);
    if (sec < 10) {
      setCurrTime(min + ":0" + sec)
      return min + ":0" + sec;
    } else {
      setCurrTime(min + ":" + sec)
      return min + ":" + sec;
    }

  }

  const getTime = (newMusic) => {
    if (newMusic !== null && newMusic !== undefined) {
      BackgroundTimer.runBackgroundTimer(() => {
        newMusic.getCurrentTime((seconds) => {
          formatTime(seconds, newMusic)
          setSecond(seconds)
        })
      }, 250)
    }
  }
  const handleFocused = (item) => {
    if (favoriteAlbums !== null && favoriteAlbums !== undefined && favoriteAlbums.length !== 0) {
      for (let i = 0; i < favoriteAlbums.length; i++) {
        if (favoriteAlbums[i].albumId === item.albumId) {
          return true;
        }
      }
    }
  }

  const pauseMusic = () => {
    console.log(currentMusic)
    BackgroundTimer.stopBackgroundTimer();
    currentMusic.pause()
    themeSound.pause()
    setIsPlaying(false)
  }

  const continueMusic = () => {
    getTime(currentMusic)
    currentMusic.play();
    if (!isMusicAlbum) {
      themeSound.play();
    }
    setIsPlaying(true)
  }

  return (
    <MusicContext.Provider
      value={{
        playMusic, setMusic, music, setIsPlaying, isPlaying, pauseMusic, continueMusic, hidden, handleFav,
        fav, currentMusic, currTime, timePercent, setTimePercent, setAlbumMusics, album, setAlbum, second, formatTime,
        setSecond, setCurrTime, theme, setTheme, themeSound, themeSoundVolume, setThemeSoundVolume, currAlbum, favoriteAlbums, setFavoriteAlbums,
        handleFocused, setThemeSound, isMusicAlbum, setIsMusicAlbum, isPlayClickable, soundCount, setSoundCount, onLogout
      }}
    >
      <Tab.Navigator




        initialRouteName="HomeScreen"
        tabBar={props => <GradiantTabBar {...props} />}>


        <Tab.Screen

          name="HomeScreen"
          component={HomeScreen}
          sceneAnimationEnabled={false}
          options={{
            navigationOptions: {
              gesturesEnabled: false,

            },
            tabBarIcon: isFocused => {
              return <HomeIcon width="30" height="30" isFocused={isFocused} />;
            },
          }}
        />
        <Tab.Screen
          name="MedidationScreen"
          component={MedidationScreen}
          options={{


            tabBarIcon: isFocused => (
              <MeditationIcon width="30" height="30" isFocused={isFocused} />
            ),
          }}
        />

        <Tab.Screen
          name="SleepScreen"
          component={SleepScreen}
          options={{
            tabBarIcon: isFocused => (
              <MoonIcon width="30" height="30" isFocused={isFocused} />
            ),
          }}
        />
        <Tab.Screen
          name="MusicScreen"
          component={MusicScreen}
          options={{
            tabBarIcon: isFocused => (
              <MusicIcon width="30" height="30" isFocused={isFocused} />
            ),
          }}
        />
        <Tab.Screen
          name="ExtraStackScreen"
          component={ExtraStackScreen}
          options={{
            tabBarIcon: isFocused => (
              <StarIcon width="30" height="30" isFocused={isFocused} />
            ),
          }}
        />



        <Tab.Screen
          name="MusicListScreen"
          component={MusicListScreen}
          options={{
            tabBarIcon: isFocused => (
              <StarIcon width="30" height="30" isFocused={isFocused} />
            ),
          }}
        />

        {/* <Tab.Screen name="MusicModal" component={MusicModal} 
    options={{
      tabBarIcon: isFocused => (
        <StarIcon width="30" height="30" isFocused={isFocused} />
      ),
    }}
    />  */}




        {/* <Tab.Screen name="MusicCard" component={MusicCard} 
    options={{
      tabBarIcon: isFocused => (
        <StarIcon width="30" height="30" isFocused={isFocused} />
      ),
    }}
  />*/}








      </Tab.Navigator>
    </MusicContext.Provider>
  );
};

export default Tabs;
