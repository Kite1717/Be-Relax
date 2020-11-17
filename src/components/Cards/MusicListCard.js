import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { WhiteText } from '../CustomComponents/CustomText';
import { useNavigation } from '@react-navigation/native';
import { MusicContext } from "../Tabs/Tabs"
import { AuthContext } from "../Auth/Auth"
import firestore from "@react-native-firebase/firestore"
import moment from "moment"
//icons
import Play2Icon from '../../icons/Play2'
import HeartIcon from '../../icons/HeartIcon'
import ChainIcon from "../../icons/ChainIcon"


const MusicListCard = ({ item, index, albumId, soundCount }) => {

  const [focused, setFocused] = React.useState(false);
  const music = React.useContext(MusicContext)
  const auth = React.useContext(AuthContext)

  const handleListenedAlbums = () => {


    const increment = firestore.FieldValue.increment(1)
    let temp = auth.userFeatures.listenedAlbums.filter(x => x.albumId === albumId)[0] || null
    let month = moment().month() + "-" + moment().year()




    if (temp != null && temp != undefined) {//Albüm daha önce dinlenmiş ise
      let database = moment(temp.lastPlay, 'DD-MM-YYYY').valueOf()
      let now = moment(moment().format("DD-MM-YYYY"), 'DD-MM-YYYY').valueOf()
      if (now > database) { //Dinlemenin üstünden bir gün geçmiş ise
        firestore().collection("albumListenCount").doc(albumId).update({
          [month]: increment
        })
        auth.userFeatures.listenedAlbums.filter(x => x.albumId === albumId)[0].lastPlay = moment().format("DD-MM-YYYY")

        firestore().collection("users").doc(auth.user.uid).update({
          listenedAlbums: auth.userFeatures.listenedAlbums
        })
      } else {

      }

    } else { // Albüm daha önce dinlenmemiş ise

      let temp2 = auth.userFeatures.listenedAlbums
      temp2.push({
        albumId: albumId,
        lastPlay: moment().format("DD-MM-YYYY")
      })

      firestore().collection("users").doc(auth.user.uid).update({
        listenedAlbums: temp2
      })
      firestore().collection("albumListenCount").doc(albumId).update({
        [month]: increment
      })
    }


  }


  return (

    <View style={styles.cardWrapper}>

      <View style={styles.flexRow}>

        {
          index < soundCount &&
          <TouchableWithoutFeedback onPress={() => {
            if (music.isPlayClickable) {
              music.playMusic(item.music)
              handleListenedAlbums();
            }

          }}>
            <View style={styles.playContainer}>
              <Play2Icon witdh="30" height="30" />
            </View>
          </TouchableWithoutFeedback >
        }
        {
          index >= soundCount &&
          <View style={styles.chainContainer}>
            <ChainIcon width="50" height="30" />
          </View>
        }



        <WhiteText style={styles.textStyle}>{item.music.name}</WhiteText>


        <TouchableWithoutFeedback onPress={() => setFocused(!focused)}>

          <HeartIcon witdh="30" height="30" isFocused={focused} />
        </TouchableWithoutFeedback >

      </View>
    </View>

  );
};

export default MusicListCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: CONSTANTS.SCREEN_WIDTH,



    paddingHorizontal: 10,

    paddingVertical: 19,
    borderRadius: 25,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 'bold'

  },
  playContainer: {
    marginLeft: '5%',
  },
  chainContainer: {
    marginLeft: '4%'
  }
});
