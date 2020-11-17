import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';

import { WhiteText } from '../CustomComponents/CustomText';
import { PurpleButton, GreenButton } from '../CustomComponents/CustomButtons';
import * as CONSTANTS from '../../Helper/Constants';

import moment from 'moment';



const SignUpScreen = ({ navigation }) => {

  const setAsyncStorage = async () => {

    await AsyncStorage.setItem('firstTime', "0");


  };
  const [loading, setLoading] = useState(false);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background_image.png')}
        style={styles.bgImage}>
        <View style={{ width: '80%' }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
            }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              keyboardVerticalOffset={20}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <>
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      style={styles.logo}
                      source={require('../../assets/berelax.png')}
                    />
                  </View>

                  <WhiteText theme={{ textAlign: 'center' }}>
                    7 günlük ücretsiz denemenize başlayın
                  </WhiteText>
                  <WhiteText>
                    Taahhüt yok. İstediğiniz zaman iptal edebilirsiniz.{'\n'}
                    {'\n'}
                  </WhiteText>
                  <Formik
                    initialValues={{
                      fullName: '',
                      email: '',
                      password: '',
                      birthDate: '',
                    }}
                    onSubmit={values => {
                      setLoading(true);



                      let date = moment(`${values.day}/${values.month}/${values.year}`, "DD-MM-YYYY");

                      // alert(date)
                      let diff = moment().diff(date, 'years', false)

                      if (date.isValid() && diff >= 18 && diff <= 100) {
                        auth()
                          .createUserWithEmailAndPassword(
                            values.email,
                            values.password,
                          )
                          .then(cred => {

                            setLoading(false);
                            setAsyncStorage()


                            firestore()
                              .collection('users')
                              .doc(cred.user.uid)
                              .set({
                                isFirstTime: true,
                                fullName: values.fullName,
                                birthDate: date,
                                defaultTheme: {
                                  imageUrl: "https://firebasestorage.googleapis.com/v0/b/be-relax-6737c.appspot.com/o/theme%2F80ee4936-e10a-4770-800e-2eabd95fd568%2Fimage%2Fdeniz.jpg?alt=media&token=b2ce66a0-8bd9-4e05-95ba-d96d67ac3074",
                                  soundUrl: "https://firebasestorage.googleapis.com/v0/b/be-relax-6737c.appspot.com/o/theme%2F80ee4936-e10a-4770-800e-2eabd95fd568%2Fsound%2Fdeniz.mp3?alt=media&token=8f4a407f-7475-4dcd-a6a3-3dd29d88dfdd"
                                },
                                likedAlbums: [],
                                isPremium: false,
                                appReminder: {
                                  hour: "09",
                                  minute: "00",
                                  isActive: false
                                },
                                attentionReminder: {
                                  hour: "09",
                                  minute: "00",
                                  isActive: false
                                },
                                sleepReminder: {
                                  hour: "09",
                                  minute: "00",
                                  isActive: false
                                },
                                listenedAlbums: [],
                                chainedAlbumList: [],

                              }).then(() => {



                                //navigation.navigate('Tabs', {screen:'HomeScreen'})
                              })

                          }
                          )
                          .catch(error => {
                            setLoading(false);
                            if (error.code === 'auth/invalid-email') {
                              Alert.alert('Mailiniz geçersizdir.');
                            } else if (
                              error.code === 'auth/email-already-in-use'
                            ) {
                              Alert.alert("Bu hesap zaten kayıtlı.");
                            } else if (error.code === 'auth/weak-password') {
                              Alert.alert('Şifreniz en az 6 karakterden oluşmalıdır.');
                            }
                          });




                      }
                      else {
                        setLoading(false)
                        Alert.alert("Doğum tarihinizi yanlış girdiniz")
                      }

                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                      <React.Fragment>
                        <TextInput
                          style={styles.card}
                          value={values.fullName}
                          onChangeText={handleChange('fullName')}
                          placeholder="Ad Soyad"
                          placeholderTextColor="white"
                        />

                        <TextInput
                          style={styles.card}
                          value={values.email}
                          onChangeText={handleChange('email')}
                          placeholder="Email"
                          placeholderTextColor="white"
                          autoCapitalize="none"
                        />
                        <TextInput
                          style={styles.card}
                          value={values.password}
                          secureTextEntry={true}
                          onChangeText={handleChange('password')}
                          placeholder="Parola"
                          placeholderTextColor="white"
                          autoCapitalize="none"
                        />

                        <WhiteText
                          theme={{
                            marginVertical: 15,
                            textAlign: 'center',
                          }}>
                          Doğum Günün
                        </WhiteText>
                        <View style={styles.flexRow}>
                          <TextInput
                            type="number"
                            style={styles.smallCard}
                            value={values.day}
                            //secureTextEntry={true}
                            maxLength={2}
                            onChangeText={handleChange('day')}

                            placeholder="Gün"
                            keyboardType="number-pad"
                            placeholderTextColor="white"
                          />
                          <TextInput

                            type="numeric"
                            style={styles.smallCard}
                            value={values.month}
                            maxLength={2}
                            //secureTextEntry={true}
                            onChangeText={handleChange('month')}
                            placeholder="Ay"
                            keyboardType="number-pad"
                            placeholderTextColor="white"
                          />
                          <TextInput
                            type="numeric"
                            style={styles.smallCard}
                            value={values.year}
                            maxLength={4}
                            //secureTextEntry={true}
                            onChangeText={handleChange('year')}
                            placeholder="Yıl"
                            keyboardType="number-pad"
                            placeholderTextColor="white"
                          />
                        </View>
                        {loading && (
                          <ActivityIndicator
                            size="large"
                            color="white"
                            style={styles.spinner}
                          />
                        )}
                        <View style={{ alignItems: 'center' }}>
                          <PurpleButton
                            theme={{ marginTop: 20 }}
                            onPress={() => handleSubmit()}>
                            Kayıt Ol
                          </PurpleButton>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                          <GreenButton
                            theme={{
                              marginTop: 30,
                              width: CONSTANTS.widthPercentage(32),
                            }}
                            onPress={() => navigation.push('LoginScreen')}>
                            Giriş Yap
                          </GreenButton>
                        </View>
                      </React.Fragment>
                    )}
                  </Formik>
                </>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

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
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: CONSTANTS.SCREEN_WIDTH / 2,
    height: CONSTANTS.ANDROID_SCREEN_HEIGHT / 5,
    resizeMode: 'contain',
  },
  smallCard: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 0.3,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: 'white',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'white',
  },
  card: {

    //width: '100%',
    width: CONSTANTS.SCREEN_WIDTH / 1.55,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.3,
    borderRadius: 30,
    borderColor: 'white',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'white',
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '45%',
  },
});
