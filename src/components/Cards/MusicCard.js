import React, { } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { WhiteText } from '../CustomComponents/CustomText';
import MusicModal from '../MusicListScreen/MusicModal'
import { MusicContext } from "../Tabs/Tabs"
import { AuthContext } from "../Auth/Auth"

const MusicCard = ({ item, isMusicAlbum, navigation }) => {


  const [isVsblModal, setIsVsblModal] = React.useState(false);
  const musicForFav = React.useContext(MusicContext)
  const auth = React.useContext(AuthContext)

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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
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
      }}
    >


      <View style={styles.cardWrapper}>
        <MusicModal
          isVsblModal={isVsblModal}
          setIsVsblModal={val => setIsVsblModal(val)}
          imageUrl={item.images.banner}
        //title={title}
        />
        <Image source={require('../../assets/new.png')} style={styles.newIcon} />
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
        <View style={styles.flexRow}>
          <Image source={{ uri: item.images.banner }} style={styles.cardImage} />
          <View style={{ marginRight: '10%', marginLeft: '10%' }}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.textStyle}>{item.author}</Text>
          </View>
          <WhiteText >{getDuration()}</WhiteText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: (CONSTANTS.SCREEN_WIDTH * 4) / 4.4,

    marginVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 20,
    paddingRight: 20,
    paddingVertical: 20,
    borderRadius: 25,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: 85,
    height: 85,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  newIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: '15%',
    top: 0,
  },
  textStyle: {
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 'bold'

  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  premiumIcon:{
    width: 27,
    height: 40,
    position: 'absolute',
    left: '99%',
    top: 5,
  }
});
