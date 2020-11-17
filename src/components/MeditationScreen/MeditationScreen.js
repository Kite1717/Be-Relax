import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BgWithTopTabs from '../BgWithTopTabs/BgWithTopTabs';
import { WhiteText } from '../CustomComponents/CustomText';
import AlbumCardHorizontal from '../Cards/AlbumCardHorizontal';
import { MusicContext } from "../Tabs/Tabs"

import firestore from '@react-native-firebase/firestore'


//music Image
import musicImage from '../../assets/musicImage.png'

const MeditationScreen = ({ navigation }) => {

  const [change, setChange] = React.useState(false)
  const musicForFav = React.useContext(MusicContext)
  const [allAlbums, setAllAlbums] = React.useState([])
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState({ name: "Hepsi", id: "hepsi-id" });
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [showPlayer, setShowPlayer] = React.useState(true)

  useEffect(() => {
    const albums = [];
    const subscriber = firestore()
      .collection('meditationAlbums')
      .onSnapshot(querySnapshots => {
        console.log(querySnapshots.docs, "kaysdkakskasfjasjk")
        querySnapshots.docs.forEach(doc => {
          if (doc.data().blob) {
          } else {
            albums.push(
              doc.data()
            );
          }
        });
        console.log(albums)
        console.log(category)
        setData(albums);
        setAllAlbums(albums)
      })

    return () => subscriber();
  }, [])

  React.useEffect(() => {
    setData(null)
    setChange(!change)
    console.log("1231231231231231231231231231231230000000")
    let subscriber;
    let albums = [];

    if (category.name === "Hepsi") {
      setData(allAlbums)
    } else {
      allAlbums.map(album => {
        console.log("bir albüm")
        if (album.categoryId === category.id) {
          albums.push(album)
        }
      })
      setData(albums)
    }

  }, [category]);


  return (
    <BgWithTopTabs backgroundColor={backgroundColor} visiblePLayer={true} visiblePLayer={showPlayer} navigation={navigation} fromComponent="meditationScreen" setCategory={setCategory}>


      <WhiteText theme={styles.title}>Meditasyon</WhiteText>

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
        contentContainerStyle={styles.bodyContainer}
        numColumns={1}
        data={data}
        renderItem={({item, index}) => (<AlbumCardHorizontal navigation={navigation} item={item} focused1={musicForFav.handleFocused(item)} isMusicAlbum={() => {return false}}/>)}
        keyExtractor={(item, index) => index.toString()}
      />
    </BgWithTopTabs>
  );
};

export default MeditationScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    flexGrow: 1,

  },
  liked: {

    marginVertical: '5%',
    marginRight: '50%',
  },
  title: {
    fontSize: 20,
  }
});

