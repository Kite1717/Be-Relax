import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { WhiteText } from '../CustomComponents/CustomText';
import { PurpleButton } from '../CustomComponents/CustomButtons';
import TickIcon from '../../icons/Tick';

const SecondInitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background_image.png')}
        style={styles.bgImage}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={styles.logo}
            source={require('../../assets/berelax.png')}
          />
          <View style={styles.blockText}>
         
            <WhiteText style={{ flex: 1, textAlign: 'center' }}>
              Sınırlı bir süre
            </WhiteText>
            <WhiteText style={{ textAlign: 'center' }}>
              için be relax Premium'u Ücretsiz deneyin
            </WhiteText>
          </View>
          <View />
          <WhiteText>
            be relax Premium üyeliğiniz şunları içerir{'\n'}
            {'\n'}
          </WhiteText>

          <View style = {styles.textContainer}>
          <TickIcon style = {styles.icon} width="30" height="30" />
          <WhiteText theme = {styles.text}>İçeriğe sınırsız erişim{'\n'}</WhiteText>
          </View>
         
          <View style = {styles.textContainer}>
          <TickIcon style = {styles.icon} width="30" height="30" />
          <WhiteText theme = {styles.text}>Özel müzik{'\n'}</WhiteText>
          </View>

          <View style = {styles.textContainer}>
          <TickIcon style = {styles.icon} width="30" height="30" />
          <WhiteText theme = {styles.text}>İstediğiniz zaman iptal edin{'\n'}</WhiteText>
          </View>

          <View style = {styles.textContainer}>
          <TickIcon style = {styles.icon} width="30" height="30" />
          <WhiteText theme = {styles.text}>Rehberi meditasyon{'\n'}</WhiteText>
          </View>

          <View style = {styles.textContainer}>
          <TickIcon style = {styles.icon} width="30" height="30" />
          <WhiteText theme = {styles.text}>Doğa sesleri{'\n'}</WhiteText>
          </View>

          <View style = {styles.textContainer}>
          <TickIcon style = {styles.icon} width="30" height="30" />
          <WhiteText theme = {styles.text}>Her hafta yeni içerik{'\n'}</WhiteText>
          </View>
          <PurpleButton
            onPress={() => navigation.push('SignUpScreen')}
            theme={{
              marginLeft: 5,
              marginTop: CONSTANTS.ANDROID_SCREEN_HEIGHT / 20,
            }}>
            Devam Et
          </PurpleButton>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SecondInitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  blockText: {
    alignItems: 'center',
    marginVertical: 30,
  },

  logo: {
    width: CONSTANTS.SCREEN_WIDTH / 2,
    height: CONSTANTS.ANDROID_SCREEN_HEIGHT / 5,
    resizeMode: 'contain',
  },

  customButtons: {
    width: 150,
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },
  textContainer : {
    flexDirection : "row",
    justifyContent: 'center',
    
  },
  icon: {
     top : 0,
     marginRight : '3%',
     

  },
  text : {
    marginTop : '2.5%',
  }
});
