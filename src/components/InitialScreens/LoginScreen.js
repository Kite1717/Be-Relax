import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import * as CONSTANTS from '../../Helper/Constants';
import { Formik } from 'formik';
import BgWithBlur from '../BgWithBlur/BgWithBlur';
import { PurpleButton, GreenButton } from '../CustomComponents/CustomButtons';
import auth from '@react-native-firebase/auth';
import { WhiteText } from '../CustomComponents/CustomText';
import AsyncStorage from '@react-native-community/async-storage';



const LoginScreen = ({navigation}) => {



  const setAsyncStorage = async () => {

    await AsyncStorage.setItem('firstTime', "0");
    await AsyncStorage.setItem('existingLogin', "0");
    const existingLogin = await AsyncStorage.getItem("existingLogin")
    console.log(existingLogin, " bende burası")
  };


  const [loading, setLoading] = useState(false);
  return (
    <BgWithBlur visiblePLayer={false}>
      {/* keyboard dissmis TODO */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../../assets/berelax.png')}
            />
          </View>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.inputBody}>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={values => {
                  setLoading(true);
                  //console.log(values);
                  auth()
                    .signInWithEmailAndPassword(values.email, values.password)
                    //.signInWithEmailAndPassword("kite.xxl17@gmail.com", "123456")
                    .then(() => {
                      
                      setAsyncStorage()
                      setLoading(false);

                    }) // develop mode

                    .catch(error => {

                      setLoading(false);
                      console.log(error);
                      Alert.alert('Hatalı Email veya Şifre');
                    });


                }}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <React.Fragment>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                      autoCapitalize="none"
                      placeholderTextColor="white"
                    />
                    <TextInput
                      style={styles.inputStyle}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      placeholder="Şifre"
                      placeholderTextColor="white"
                      secureTextEntry={true}
                    />
                    {loading && (
                      <ActivityIndicator
                        size="large"
                        color="white"
                        style={styles.spinner}
                      />
                    )}
                    <View
                      style={{
                        width: '100%',
                        alignItems: 'center',
                      }}>
                      <PurpleButton
                        onPress={() => handleSubmit()}
                        theme={{
                          marginTop: 20,

                        }}>
                        Giriş Yap
                      </PurpleButton>

                    </View>


                  </React.Fragment>
                )}
              </Formik>
            </View>
          </KeyboardAvoidingView>
        </>
      </TouchableWithoutFeedback>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}
      >
        <GreenButton
          onPress={() => navigation.navigate('SignUpScreen')}
          theme={{
            marginTop: 30,
            width: CONSTANTS.widthPercentage(32),
          }}>
          Kayıt Ol
                      </GreenButton>
      </View>

    </BgWithBlur>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: CONSTANTS.SCREEN_WIDTH / 1.5,
    height: CONSTANTS.heightPercentage(30),
    resizeMode: 'contain',
  },
  inputBody: {
    height: CONSTANTS.heightPercentage(30),
    alignItems: 'center',
  },
  inputStyle: {

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
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    zIndex: 1000,
  },
  signUp: {
    height: CONSTANTS.heightPercentage(15),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
