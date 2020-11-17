import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { useNavigation } from '@react-navigation/native';
import HeartIcon from '../../icons/HeartIcon'
import Spinner from '../CustomComponents/Spinner'
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../Auth/Auth'

import { MusicContext } from '../Tabs/Tabs'

const AlbumCardHorizontal = ({ item, focused1, isMusicAlbum }) => {
  const navigation = useNavigation();
  const auth = React.useContext(AuthContext)
  const musicForFav = React.useContext(MusicContext)
  const [focused, setFocused] = useState(focused1)
  const [loading, setLoading] = useState(false)

  //console.log(item);

  const getDuration = () => {

    let hour = Math.floor(Number(item.duration) / 60);

    if (hour === 0) {
      return item.duration + " sn";

    }
    else {


      let min = Number(item.duration) - hour * 60;
      return hour + " dk " + min + " sn";
    }


  }


  const handleUserLike = () => {
    let tempLikes = [...musicForFav.favoriteAlbums]
    const subscriber = firestore().collection("users").doc(auth.user.uid)
    if (focused1) {
      tempLikes.map((e, index) => { // unlike
        if (e.albumId === item.albumId) {
          tempLikes.splice(index, 1);
          musicForFav.setFavoriteAlbums(tempLikes)
          musicForFav.handleFav()
          subscriber.update({
            likedAlbums: [...tempLikes]
          })

        }
      })
    } else { // like
      console.log("1")
      tempLikes.push(item)
      musicForFav.setFavoriteAlbums(tempLikes)
      musicForFav.handleFav()
      subscriber.update({
        likedAlbums: [...tempLikes]
      })
      console.log("5")
    }
    setFocused(!focused)
    console.log("6")
  }

  //console.log(item);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        musicForFav.setIsMusicAlbum(isMusicAlbum())
        if (auth.userFeatures.isPremium != null && auth.userFeatures.isPremium) {
          navigation.navigate('MusicListScreen', {
            item,
          })
        } else {
          if (item.isPremium) {
            //TODO buraya tıklandığında ödeme sayfasına gidecek
            console.log("albüm premium giremezsin")
          }
          else {
            navigation.navigate('MusicListScreen', {
              item,
            })
          }

        }
      }

      }>

      <View style={styles.card}>
        <ImageBackground
          source={{ uri: item.images.banner }}
          style={styles.image}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        >
          {
            loading &&
            <Spinner />
          }
          {
              auth.userFeatures.isPremium != null &&
              <>
              {
            
                !auth.userFeatures.isPremium &&
                item.isPremium &&
                <Image
                  source={require('../../assets/premium.png')}
                  style={styles.premiumIcon}
                />
              }
              </>
            }
          <Image
            source={require('../../assets/new.png')}
            style={styles.newIcon}
          />

          <TouchableWithoutFeedback
            //like dislike button
            onPress={handleUserLike}
          >
            <View style={styles.likeIcon}>
              <HeartIcon width="30" height="30" isFocused={focused1} />
            </View>
          </TouchableWithoutFeedback>




          <View>
            <Text style={styles.durationStyle}>{getDuration()}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>{item.name}   </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumCardHorizontal;

const styles = StyleSheet.create({
  card: {
    width: CONSTANTS.albumHorCardWidth,
    height: CONSTANTS.DEVICE.ALBUM_CARD_HEIGHT,
    borderRadius: CONSTANTS.albumCardWidth * 0.2,
    overflow: 'hidden',
    margin: CONSTANTS.albumCardMargin,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  durationStyle: {
    color: 'white',
    position: 'absolute',
    right: 0,
    left: CONSTANTS.DEVICE.ALBUM_CARD_HEIGHT / 10,
    top: CONSTANTS.SCREEN_WIDTH / 4.7,
    width: '13%',

    backgroundColor: 'rgba(0, 0, 0, 0.3)',


    paddingVertical: "5%",
    textAlign: "center",



    borderRadius: 7,
    overflow: 'hidden',


  },
  titleStyle: {

    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',

    top: CONSTANTS.DEVICE.ALBUM_CARD_HEIGHT / 1.4,
    left: CONSTANTS.albumHorCardWidth / 5,


    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '2.5%',
    paddingHorizontal: '15%',



    borderRadius: 15,
    overflow: 'hidden',
    fontSize: 16,
    textAlign: "center",

    margin: 0,

    color: "rgba(255,255,255,1)",
    width: CONSTANTS.SCREEN_WIDTH * 0.6,


  },
  newIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: '6%',
    top: 0,
  },
  premiumIcon: {
    width: 35,
    height: 50,
    position: 'absolute',
    left: '84%',
    top: 10,
  },
  likeIcon: {

    width: 30,
    height: 30,
    position: 'absolute',
    left: '6%',
    top: "20%",

  },



});
