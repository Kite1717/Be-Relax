import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BgWithTopTabs from '../BgWithTopTabs/BgWithTopTabs';
import { WhiteText } from '../CustomComponents/CustomText';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import AlbumCard from '../Cards/AlbumCard';
import firestore from '@react-native-firebase/firestore'
import { MusicContext } from "../Tabs/Tabs"


//music Image
import musicImage from '../../assets/musicImage.png'

const MusicScreen = ({ navigation }) => {

  const [change, setChange] = React.useState(false)
  const musicForFav = React.useContext(MusicContext)
  const [allAlbums, setAllAlbums] = React.useState([])
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState({ name: "Hepsi", id: "hepsi-id" });
  const [showPlayer, setShowPlayer] = React.useState(true)
  const [backgroundColor, setBackgroundColor] = React.useState("");

  React.useEffect(() => {
    const albums = [];
    const subscriber = firestore()
      .collection('musicAlbums')
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
  }, []);



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
    <BgWithTopTabs backgroundColor={backgroundColor} visiblePLayer={showPlayer} navigation={navigation} fromComponent="musicScreen" setCategory={setCategory}>
      <WhiteText theme={styles.title}>Muzik</WhiteText>

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
        numColumns={2}
        data={data}
        renderItem={({ item }) => <AlbumCard key={item.albumId} navigation={navigation} item={item} focused1={musicForFav.handleFocused(item)} isMusicAlbum={() => { return true }} />}
        keyExtractor={item => "album-" + item.id}
      />
    </BgWithTopTabs>
  );
};

export default MusicScreen;

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

