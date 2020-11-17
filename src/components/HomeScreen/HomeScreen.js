import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BgWithTopTabs from '../BgWithTopTabs/BgWithTopTabs';
import { WhiteText } from '../CustomComponents/CustomText';
import * as CONSTANTS from '../../Helper/Constants';
import AlbumCard from '../Cards/AlbumCard';

import firestore from '@react-native-firebase/firestore';
import axios from 'axios';


import { AuthContext } from '../Auth/Auth'


//music Image
import musicImage from '../../assets/musicImage.png'
import MusicCard from '../Cards/MusicCard';

import HeartIcon from '../../icons/HeartIcon'
import { set } from 'react-native-reanimated';
import { MusicContext } from '../Tabs/Tabs';



//https://www.mboxdrive.com/beden-ile%20iletisim.mp3
//https://www.mboxdrive.com/kendin-ol.mp3
//https://www.mboxdrive.com/panik-atak-kontrol-altinda.mp3
const HomeScreen = ({ navigation }) => {
  const auth = React.useContext(AuthContext)
  const [musicAlbumIds, setMusicAlbumIds] = React.useState([])
  const musicForFav = React.useContext(MusicContext)
  const [data, setData] = React.useState([]);
  const [special, setSpecial] = React.useState([]);
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const _albums = ["meditationAlbums", "sleepAlbums", "musicAlbums"];
  const [showPlayer, setShowPlayer] = React.useState(true)

  React.useEffect(() => {
    let temp = [];
    firestore().collection("musicAlbums").get().then(querySnapshots => {
      querySnapshots.docs.map(doc => {
        if (!doc.data().blob) {
          temp.push(doc.data().albumId)
        }
      })
    }).then(() => {
      setMusicAlbumIds(temp)
    })
  }, [])

  React.useEffect(() => {
    setSpecial(auth.specialAlbums)
  },[auth.specialAlbums])

  React.useEffect(() => {
    console.log("6666")
    setData(musicForFav.favoriteAlbums)
    
  }, [musicForFav.favoriteAlbums]);

  return (
    <BgWithTopTabs style={{display:"none"}} backgroundColor={backgroundColor} visiblePLayer={showPlayer} navigation={navigation} fromComponent="homeScreen">
      <View
        style={{
          height: CONSTANTS.DEVICE.TITLE_HEIGHT,
          justifyContent: 'center',
        }}>
        <WhiteText theme={styles.title}>Bana Özel</WhiteText>
      </View>


      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: '5%' }}
        numColumns={1}
        data={special}
        renderItem={({ item }) => (
          <MusicCard
            navigation={navigation}
            key={item.key}
            item={item}
            isMusicAlbum={() => {
              let temp = false;
              for (i = 0; i < musicAlbumIds.length; i++) {
                console.log(musicAlbumIds[i])
                if (musicAlbumIds[i] === item.albumId) {
                  temp = true
                }
              }
              return temp
            }}
          />
        )}
        keyExtractor={item => item.albumId}
      />


      <View style={styles.likedContainer}>


        <HeartIcon width="30" height="30" isFocused={true} />

        <View style={{ marginLeft: '4%' }}>
          <WhiteText  >Sevdiklerim</WhiteText>

        </View>
      </View>



      <FlatList

        onMomentumScrollEnd={() => {
          setTimeout(() => {
            console.log("begin")
            setShowPlayer(true)

          }, 2000)


        }}
        onScroll={() => {

          if (backgroundColor === 'rgba(52, 52, 52, 0.01)')
            setBackgroundColor('rgba(52, 52, 52, 0)')
          else setBackgroundColor('rgba(52, 52, 52, 0.01)')
        }}
        onMomentumScrollBegin={() => {
          console.log("end")

          setShowPlayer(false)

        }}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: '5%', }}
        contentContainerStyle={styles.bodyContainer}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <AlbumCard navigation={navigation} item={item} focused1={true} isMusicAlbum={() => {
          let temp = false;
          for (i = 0; i < musicAlbumIds.length; i++) {
            console.log(musicAlbumIds[i])
            if (musicAlbumIds[i] === item.albumId) {
              temp = true
            }
          }
          return temp
        }} />}
        keyExtractor={item => "album-" + item.albumId}
      />



    </BgWithTopTabs>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    flexGrow: 1,

  },
  liked: {



    flexDirection: 'row',
    marginVertical: '5%',
    marginRight: '50%',


  },
  likeText: {

    color: "rgba(255,255,255,0)"
  },
  title: {
    fontSize: 20,
  },
  likedContainer: {


    right: CONSTANTS.SCREEN_WIDTH / 3.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: CONSTANTS.SCREEN_WIDTH / 3.2,

  }
});
