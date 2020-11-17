import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { WhiteText } from '../CustomComponents/CustomText';

import { CommonActions } from "@react-navigation/native";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

import Nefes from './Nefes'

//Icons
import Human from '../../icons/Human'
import Human2 from '../../icons/Human2'
import Theme from '../../icons/Theme'
import Setting from '../../icons/Setting'




const ExtraScreens = ({ navigation }) => {
  const [isVsblModal, setIsVsblModal] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Nefes
        isVsblModal={isVsblModal}
        setIsVsblModal={val => setIsVsblModal(val)}

      //title={title}
      />
      <ImageBackground
        source={require('../../assets/main_bg.jpg')}
        style={styles.bgImage}
        blurRadius={60}>
        <KeyboardAvoidingView
          style={{ marginTop: getStatusBarHeight() > 20 ? getStatusBarHeight() - 10 : 0, }}
        >
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
              <TextInput
                style={styles.searchStyle}
                placeholder="Kütüphaneyi ara"
                placeholderTextColor="white"
              />

              <View style={styles.optionLine}>
                <Human width="45" height="45" />
                <TouchableWithoutFeedback
                  onPress={() => setIsVsblModal(true)}>
                  <View>
                    <WhiteText theme={styles.textStyle} >Nefes Egzersizi</WhiteText>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.hrStyle}></View>
              </View>


              <View style={styles.optionLine}>
                <Human2 width="45" height="45" />
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('ProfileScreen')}>
                  <View>
                    <WhiteText theme={styles.textStyle}>Profil</WhiteText>
                  </View>

                </TouchableWithoutFeedback>
                <View style={styles.hrStyle}></View>

              </View>



              <View style={styles.optionLine}>
                <Theme width="45" height="45" />
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('ThemeScreen')}>
                  <View>
                    <WhiteText theme={styles.textStyle} >Tema</WhiteText>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.hrStyle}></View>

              </View>




              <View style={styles.optionLine}>
                <Setting width="45" height="45" />
                <TouchableWithoutFeedback

                  onPress={() => navigation.navigate('SettingsStackScreen')
                  }>
                  <View>

                    <WhiteText theme={styles.textStyle}>Ayarlar</WhiteText>
                  </View>
                </TouchableWithoutFeedback>

                <View style={styles.hrStyle}></View>
              </View>



            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>

    </View>
  );
};

export default ExtraScreens;

const styles = StyleSheet.create({
  container: {
    paddingLeft: wp('10%'),
  },

  optionLine: {
    flexDirection: 'row',
    marginVertical: wp('5%'),
  },
  searchStyle: {
    color: 'white',
    width: '90%',
    marginTop: wp('5%'),
    textAlign: 'center',
    backgroundColor: 'rgba(87, 87, 86, 0.9)',
    padding: 10,
    borderRadius: 30,
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: wp('2%'),
    marginLeft: wp('2%'),

  },
  hrStyle: {
    marginLeft: wp('2%'),
    marginTop: wp('5%'),
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.5)'

  }
});
