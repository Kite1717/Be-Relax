import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import * as CONSTANTS from '../../../Helper/Constants';
import { Formik } from 'formik';
import Msg from '../../../icons/settings/Msg'
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { PurpleButton } from '../../CustomComponents/CustomButtons';
import * as yup from "yup"
import auth from "@react-native-firebase/auth"
import Spinner from "../../CustomComponents/Spinner"

//icons 
import Password from '../../../icons/settings/Password'
import Tick from '../../../icons/Tick'

const userValidationSchema = yup.object().shape({
  email: yup.string().email("Lütfen geçerli bir E-mail Girin").required("Lütfen E-mailinizi Girin"),
  oldPassword: yup.string().min(6, ({ min }) => `Şifre en az ${min} karakter olmalı`).required("Eski şifrenizi girmelisiniz"),
  newPassword: yup.string().min(6, ({ min }) => `Şifre en az ${min} karakter olmalı`).required("Yeni şifrenizi belirleyiniz"),
  newPassword2: yup.string().min(6, ({ min }) => `Şifre en az ${min} karakter olmalı`).required("Yeni şifrenizi belirleyiniz")
})


const SubsSetScreen = ({ navigation }) => {

  const [loading, setLoading] = React.useState(false)

  return (
    <BgWithBlur visiblePLayer={false}>
      {/* keyboard dissmis TODO */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../../../assets/berelax.png')}
            />
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
            }}>
            <KeyboardAvoidingView behavior="padding">
              <View style={styles.inputBody}>
                <Formik
                  validationSchema={userValidationSchema}
                  initialValues={{
                    email: '',
                    oldPassword: '',
                    newPassword: '',
                    newPassword2: '',
                  }}
                  onSubmit={values => {
                    if (values.newPassword === values.newPassword2) {
                      setLoading(true)
                      auth().signInWithEmailAndPassword(values.email, values.oldPassword).then(() => {
                        console.log("doğru")
                        auth().currentUser.updatePassword(values.newPassword).then(() => {
                          console.log("bu da doğru")
                          setLoading(false)
                          navigation.goBack()
                        })
                      })
                      console.log(values)
                    }
                  }}>
                  {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                    <React.Fragment>
                      <View style={styles.searchSection}>
                        <Msg style={styles.searchIcon} width="30" height="30" />
                        <TextInput
                          name="email"
                          style={styles.inputStyle}
                          value={values.email}
                          onChangeText={handleChange('email')}
                          placeholder="E Mail"
                          placeholderTextColor="white"
                          autoCapitalize='none'
                        />
                        <Tick style={styles.TickIcon} width="30" height="30" />
                      </View>
                      {errors.email &&
                        <Text style={{ fontSize: 15, color: 'red' }}>{errors.email}</Text>
                      }
                      <View style={styles.searchSection}>
                        <Password style={styles.searchIcon} width="30" height="30" />
                        <TextInput
                          style={styles.inputStyle}
                          value={values.oldPassword}
                          onChangeText={handleChange('oldPassword')}
                          placeholder="Eski Şifreniz"
                          placeholderTextColor="white"
                          autoCapitalize='none'
                          secureTextEntry={true}
                        />
                        <Tick style={styles.TickIcon} width="30" height="30" />
                      </View>
                      {errors.oldPassword &&
                        <Text style={{ fontSize: 15, color: 'red' }}>{errors.oldPassword}</Text>
                      }

                      <View style={styles.searchSection}>
                        <Password style={styles.searchIcon} width="30" height="30" />
                        <TextInput
                          style={styles.inputStyle}
                          value={values.newPassword}
                          onChangeText={handleChange('newPassword')}
                          placeholder="Yeni Şifreniz"
                          placeholderTextColor="white"
                          autoCapitalize='none'
                          secureTextEntry={true}
                        />
                        <Tick style={styles.TickIcon} width="30" height="30" />
                      </View>

                      {errors.newPassword &&
                        <Text style={{ fontSize: 15, color: 'red' }}>{errors.newPassword}</Text>
                      }

                      <View style={styles.searchSection}>
                        <Password style={styles.searchIcon} width="30" height="30" />
                        <TextInput
                          style={styles.inputStyle}
                          value={values.newPassword2}
                          onChangeText={handleChange('newPassword2')}
                          placeholder="Yeni Şifrenizi Tekrar Girin"
                          placeholderTextColor="white"
                          autoCapitalize='none'
                          secureTextEntry={true}
                        />
                        <Tick style={styles.TickIcon} width="30" height="30" />
                      </View>
                      {errors.newPassword2 &&
                        <Text style={{ fontSize: 15, color: 'red' }}>{errors.newPassword2}</Text>
                      }

                      <View style={{ width: '80%' }}>
                        <PurpleButton onPress={handleSubmit} theme={{ marginTop: 20, width: '100%' }}>
                          güncelle
                      </PurpleButton>
                      </View>
                    </React.Fragment>
                  )}
                </Formik>
              </View>
              {
                loading &&
                <Spinner />
              }
            </KeyboardAvoidingView>
          </ScrollView>
        </>
      </TouchableWithoutFeedback>
    </BgWithBlur>
  );
};

export default SubsSetScreen;

const styles = StyleSheet.create({
  logo: {
    width: CONSTANTS.SCREEN_WIDTH / 1.5,
    height: CONSTANTS.heightPercentage(30),
    resizeMode: 'contain',
  },
  inputBody: {
    height: CONSTANTS.heightPercentage(60),
    alignItems: 'center',
  },
  inputStyle: {
    width: '85%',
    color: 'white',
    opacity: 0.84,
    backgroundColor: '#1D1D1B',
    padding: 25,
    paddingHorizontal: 60,
    margin: 10,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',



  },
  searchSection: {

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  searchIcon: {
    position: "absolute",
    overflow: 'hidden',

    zIndex: 999,
    left: "6%",


  },

  TickIcon: {
    position: "absolute",
    overflow: 'hidden',

    zIndex: 999,
    right: "6%",


  },
});
