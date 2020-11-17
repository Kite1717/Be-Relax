import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  PixelRatio,
} from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { useNavigation } from '@react-navigation/native';
import { WhiteText } from '../CustomComponents/CustomText';
import HeartIcon from '../../icons/HeartIcon'
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../Auth/Auth'
import { MusicContext } from '../Tabs/Tabs';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');



// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}


const AlbumCard = ({ item, focused1, isMusicAlbum }) => {
  const auth = React.useContext(AuthContext)
  const navigation = useNavigation();
  const musicForFav = React.useContext(MusicContext)
  const [focused, setFocused] = React.useState(focused1)

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

  const onClick = () => {
    console.log(isMusicAlbum(), "kontrol ettik")
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


  return (
    <TouchableWithoutFeedback
      onPress={() => onClick()

      }>
      <View style={styles.card}>
        <ImageBackground
          source={{ uri: item.images.banner }}
          style={styles.image}>
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
            onPress={() => handleUserLike()}
          >

            <View style={styles.likeIcon}>
              <HeartIcon width="30" height="30" isFocused={focused1} />
            </View>
          </TouchableWithoutFeedback>
          <View
          >

            <View

            >
              <WhiteText theme={styles.titleStyle}   >{item.name} </WhiteText>
            </View>



          </View>

          <View>
            <Text style={styles.durationStyle}>{getDuration()}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  card: {
    width: CONSTANTS.albumCardWidth,
    height: CONSTANTS.DEVICE.ALBUM_CARD_HEIGHT,
    borderRadius: CONSTANTS.albumCardWidth * 0.16,
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

    right: '4%',
    top: 190,
    width: '38%',


    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '8%',

    marginTop: '4%',
    marginRight: '18%',
    borderRadius: 18,
    overflow: "hidden",
    textAlign: 'center',


  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',

    top: CONSTANTS.DEVICE.ALBUM_CARD_HEIGHT / 2,
    left: CONSTANTS.albumCardWidth * 0.05,


    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '2.5%',
    paddingHorizontal: '15%',



    borderRadius: 15,
    overflow: 'hidden',
    fontSize: normalize(12),
    textAlign: "center",

    margin: 0,

    color: "rgba(255,255,255,1)",
    width: CONSTANTS.SCREEN_WIDTH * 0.4,

  },
  premiumIcon: {
    width: 35,
    height: 50,
    position: 'absolute',
    left: '74%',
    top: 10,
  },
  newIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: '15%',
    top: 0,
  },
  likeIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: '15%',
    top: "20%",

  },

});
