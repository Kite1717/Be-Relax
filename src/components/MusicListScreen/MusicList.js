import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import moment from "moment"

import MusicListCard from '../Cards/MusicListCard';
import * as CONSTANTS from '../../Helper/Constants';
import BgWithBlur from '../BgWithBlur/BgWithBlur';
import { WhiteText } from '../CustomComponents/CustomText';
import musicImage from '../../assets/musicImage.png'
import { MusicContext } from "../Tabs/Tabs"
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from "../Auth/Auth"
//icons
import BackIcon from '../../icons/Back'
import DownLoadIcon from '../../icons/Download'
import UplaodIcon from '../../icons/Uplaod'
import Play2Icon from '../../icons/Play2'

import Spinner from '../CustomComponents/Spinner'
import { SvgUri } from "react-native-svg"

import header from '../../icons/temp/headerImg.png'







const MusicList = ({ navigation, route }, item) => {

  const auth = React.useContext(AuthContext)
  const albumContext = React.useContext(MusicContext)
  const [loading, setLoading] = React.useState(true)
  const [showPlayer, setShowPlayer] = React.useState(true)
  const [musicData, setMusicData] = React.useState(null)
  const [data, setData] = React.useState(null)



  useEffect(() => {
    setData(route.params.item)
    albumContext.setAlbum(route.params.item)

    let temp = auth.userFeatures.chainedAlbumList.filter(x => x.albumId === route.params.item.albumId)[0] || null
    
    if (temp !== null && temp !== undefined) { // Bu albüm kullanıcıda mevcut tarih ve indis kontrolünü yap
      console.log("burdayıımmmmmmm")
      let database = moment(temp.lastPlay, 'DD-MM-YYYY').valueOf()
      let now = moment(moment().format("DD-MM-YYYY"), 'DD-MM-YYYY').valueOf()
      if (now > database && auth.userFeatures.chainedAlbumList.filter(x => x.albumId === route.params.item.albumId)[0].soundCount < route.params.item.musics.length) { // Tarih kontrolü
        auth.userFeatures.chainedAlbumList.filter(x => x.albumId === route.params.item.albumId)[0].soundCount += 1
        auth.userFeatures.chainedAlbumList.filter(x => x.albumId === route.params.item.albumId)[0].lastPlay = moment().format("DD-MM-YYYY")
        albumContext.setSoundCount(temp.soundCount + 1)
        firestore().collection("users").doc(auth.user.uid).set(auth.userFeatures)

      } else {
        albumContext.setSoundCount(temp.soundCount)
      }
    } else { // Albüm kullanıcıda mevcut değil
      if (route.params.item.isChained) { //bu albüm kullanıcıda mevcut değil ve zincirli
        console.log(auth.userFeatures, "userFeatures")
        albumContext.setSoundCount(1)
        auth.userFeatures.chainedAlbumList.push({
          albumId: route.params.item.albumId,
          lastPlay: moment().format("DD-MM-YYYY"),
          soundCount: 1
        })
        firestore().collection("users").doc(auth.user.uid).set(auth.userFeatures)
      } else {
        albumContext.setSoundCount(route.params.item.musics.length)
      }

    }

  }, [route.params.item])


  useEffect(() => {
    setData(route.params.item)
    albumContext.setAlbum(route.params.item)

  }, [route, data])


  useEffect(() => {
    console.log(data, "szswssdsadsdasdsadasdsadsadsadsa")
    setLoading(false)
    if (data !== null && data !== undefined) {


      const temp = [];

      data.musics.forEach((value, index) => {

        temp.push({
          music: value,
          teller: data.teller,
          author: data.author,
          authorImage: data.images.author,
          bannerImage: data.images.banner,
          modalImage: data.images.modal,
          desc: data.desc,
          key: "music-" + index,
        })
      })
      albumContext.setAlbumMusics(route.params.item.musics)
      setMusicData(temp)


    }



  }, [data])

  return (
    <BgWithBlur visiblePLayer={showPlayer} navigation={navigation}>

      {
        !loading ?
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>

            <Image
              style={styles.headerImage}
              source={{ uri: data.images.header }}
            />

            {/* <SvgUri
    width = "100%"

    height = "40%"
  
    uri={data.images.header} 
  /> */}


            <View
              style={{
                position: 'absolute',
                top: '2%',
                left: 0,

              }}>
              <View style={styles.iconContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <BackIcon width="40" height="40" />
                </TouchableWithoutFeedback>
              </View>
            </View>




            <View style={styles.infoContainer}>
              <View><WhiteText theme={styles.albumTitle}>{data.name}</WhiteText></View>



              <View style={{ flex: 1, flexDirection: "row" }}>


                <Image style={styles.authorImage}
                  source={{ uri: data.images.teller }} />

                <View style={styles.subInfoContainer}>
                  <WhiteText theme={styles.desc}>{data.desc}</WhiteText>
                  <WhiteText theme={styles.author}>{data.teller}</WhiteText>
                </View>

              </View>

            </View>






            {/* <View
              style={{
                position: 'absolute',
                top: '2%',
                right: "3%",

              }}>

              <View style={styles.rightIconsContainer}>

                <View style={{ marginLeft: "5%" }}>


                  <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <UplaodIcon width="35" height="35" />
                  </TouchableWithoutFeedback>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <DownLoadIcon width="35" height="35" />
                </TouchableWithoutFeedback>
              </View>
            </View> */}






            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flex: 0, }}


              onMomentumScrollEnd={() => {
                setTimeout(() => {
                  console.log("begin")
                  setShowPlayer(true)

                }, 2000)


              }}

              onMomentumScrollBegin={() => {
                console.log("end")

                setShowPlayer(false)

              }}

            >
              <View

                style={{


                  justifyContent: 'center',
                  // backgroundColor : 'red'
                }}
              />

              {
                musicData !== null && musicData !== undefined &&
                <FlatList
                  contentContainerStyle={styles.bodyContainer}
                  numColumns={1}
                  data={musicData}
                  renderItem={({ item, index }) => (
                    <MusicListCard
                      item={item} index={index} albumId={route.params.item.albumId} soundCount={albumContext.soundCount}
                    />
                  )}
                  keyExtractor={item => item.key}

                />

              }


            </ScrollView>
          </View>
          :
          <Spinner />
      }

    </BgWithBlur>
  );
};

export default MusicList;
const styles = StyleSheet.create({
  bodyContainer: {
    flexGrow: 1,
  },
  iconContainer: {
    marginLeft: '10%'
  },
  rightIconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  headerImage: {
    width: CONSTANTS.SCREEN_WIDTH,

    height: CONSTANTS.heightPercentage(30),
    resizeMode: 'cover',
  },
  infoContainer: {
    width: CONSTANTS.SCREEN_WIDTH,
    height: 120,

    backgroundColor: "#631F27"
  },
  albumTitle: {
    fontSize: 20,
    marginLeft: "5%",
    marginTop: "3%",
  },
  authorImage: {

    marginHorizontal: '4%',
    marginTop: "2%",
    height: 60,
    width: 60,
    borderRadius: 60,
    overflow: 'hidden',
    position: 'relative',

  },
  desc: {

    fontSize: 15,
    color: "rgba(255,255,255,0.6)"
  },
  author: {
    fontSize: 15,
    color: "rgba(255,255,255,0.6)"
  },
  subInfoContainer: {

    marginTop: "5%",

  },
  scrollTitle: {
    textAlign: "center",
    fontSize: 17,
    margin: 0,

    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    width: CONSTANTS.SCREEN_WIDTH * 0.6,



  }
});
