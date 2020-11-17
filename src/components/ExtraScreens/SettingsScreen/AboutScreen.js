import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as CONSTANTS from '../../../Helper/Constants';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { WhiteText } from '../../CustomComponents/CustomText';
import {AuthContext} from '../../Auth/Auth'


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const About = () => {

  const user = React.useContext(AuthContext)
  console.log(user , "user")
  return (
    <BgWithBlur visiblePLayer={false}>
      <View style={styles.title}>
      <View style = {styles.subHrStyle}></View>
        <WhiteText theme={{ fontSize: 24 }}>Hakkımızda</WhiteText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={require('../../../assets/berelax.png')}
        />
      </View>
      <WhiteText theme={{ textAlign: 'center', lineHeight: 25 }}>
        be relax İzmir'de
      </WhiteText>
      <WhiteText theme={{ textAlign: 'center' }}>yapılmıştır.</WhiteText>
      <View style={styles.version}>
        <WhiteText>Versiyon 0.1 {'\n'}</WhiteText>
  <WhiteText theme={{ lineHeight: 25 }}>{user.user.email}</WhiteText>
        <WhiteText>olarak giriş yaptın</WhiteText>
      </View>
    </BgWithBlur>
  );
};

export default About;

const styles = StyleSheet.create({
  title: {
    height: CONSTANTS.heightPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'row',
    marginRight : wp('37%')
  },
  logo: {
    width: CONSTANTS.SCREEN_WIDTH / 1.5,
    height: CONSTANTS.heightPercentage(15),
    resizeMode: 'contain',
    marginTop: CONSTANTS.heightPercentage(5),
  },
  version: {
    justifyContent: 'center',
    alignItems: 'center',
    height: CONSTANTS.heightPercentage(55),
  },
  subHrStyle : {
    marginTop : wp('4%'),
    marginRight : wp('5%'),
    width :'50%', 
    height : 0.7,
    backgroundColor : 'rgba(255,255,255,0.5)'
  },
});
