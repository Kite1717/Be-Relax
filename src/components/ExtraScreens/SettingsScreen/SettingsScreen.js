import React, { useRef, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { WhiteText } from '../../CustomComponents/CustomText';
import * as CONSTANTS from '../../../Helper/Constants';
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';
import { AuthContext } from '../../Auth/Auth'
import { MusicContext } from "../../Tabs/Tabs"

//icons

import Human2 from '../../../icons/settings/Human2'
import MySub from '../../../icons/settings/MySub'
import Password from '../../../icons/settings/Password'
import Download from '../../../icons/settings/Download'
import Attention from '../../../icons/settings/Attention'
import Sleep from '../../../icons/settings/Sleep'
import Login from '../../../icons/settings/Login'
import FAQ from '../../../icons/settings/FAQ'
import About from '../../../icons/settings/About'
import Exit from '../../../icons/settings/Exit'

const SettingsScreen = ({ navigation }) => {

  const musicContext = React.useContext(MusicContext);
  const [loading, setLoading] = React.useState(true);
  const signOut = () => {

    setLoading(true)


    auth().signOut().then(() => {
      console.log('Signed Out');
      setLoading(false)


    }, function (error) {
      console.error('Sign Out Error', error);
    })
  }


  return (
    <BgWithBlur visiblePLayer={false}>



      <View style={styles.title}>
        <View style={styles.hrStyle}></View>
        <WhiteText theme={{ fontSize: 20 }}>Ayarlar</WhiteText>

      </View>

      <View style={styles.bodyHeight}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <TouchableWithoutFeedback
            onPress={() => navigation.push('AccInfoScreen')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>

              <Human2 width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Hesap Bilgisi</WhiteText>

            </View>
          </TouchableWithoutFeedback>



          <TouchableWithoutFeedback
            onPress={() => navigation.push('UpdAccScreen')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <MySub width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Aboneliği Yönet</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback
            onPress={() => navigation.push('UpdPassScreen')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <Password width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Şifreni Değiştir</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback
            onPress={() => navigation.push('DownloadsScreen')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <Download width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Yüklemeler</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback
            onPress={() => navigation.push('AttentionReminder')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <Attention width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Dikkat Hatırlatıcısı</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback
            onPress={() => navigation.push('SleepReminder')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <Sleep width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Uyku Hatırlatıcısı</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback
            onPress={() => navigation.push('AppReminder')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <Login width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Giriş Hatırlatıcısı</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <View style={styles.subTitle}>
            <View style={styles.subHrStyle}></View>
            <FAQ width="35" height="35" />
            <WhiteText theme={styles.textStyle}>Sıkça Sorulan Sorular</WhiteText>
          </View>


          <TouchableWithoutFeedback
            onPress={() => navigation.push('AboutScreen')}>
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <About width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Hakkımızda</WhiteText>
            </View>
          </TouchableWithoutFeedback>


          <TouchableWithoutFeedback onPress={() => {
            musicContext.onLogout()
            signOut()
          }}
          >
            <View style={styles.subTitle}>
              <View style={styles.subHrStyle}></View>
              <Exit width="35" height="35" />
              <WhiteText theme={styles.textStyle}>Çıkış Yap</WhiteText>
            </View>
          </TouchableWithoutFeedback>


        </ScrollView>
      </View>



    </BgWithBlur>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',

    height: CONSTANTS.heightPercentage(15),
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: (CONSTANTS.DEVICE.BODY_HEIGHT - 200) / 20,
    marginHorizontal: (CONSTANTS.SCREEN_WIDTH / 100),
  },
  bodyHeight: {
    height: CONSTANTS.heightPercentage(80),
  },
  spinner: {
    flex: 1
  },

  hrStyle: {
    marginRight: wp('7%'),

    width: '30%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)'

  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: wp('1%'),
    marginLeft: wp('5%'),


  },
  subHrStyle: {
    marginTop: wp('2%'),
    marginRight: wp('3%'),
    width: '10%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },

});
