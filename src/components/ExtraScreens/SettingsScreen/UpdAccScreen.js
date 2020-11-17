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
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as CONSTANTS from '../../../Helper/Constants';
import { Formik } from 'formik';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { PurpleButton } from '../../CustomComponents/CustomButtons';

//icons 
import Human2 from '../../../icons/settings/Human2'
import Msg from '../../../icons/settings/Msg'
import Tick from '../../../icons/Tick'
import firestore from "@react-native-firebase/firestore"
import { AuthContext } from "../../Auth/Auth"
import * as yup from "yup"


const nameValidationSchema = yup.object().shape({
  fullName: yup.string().required("Lütfen İsminizi Girin")
})


const UpdAccScreen = ({ navigation }) => {

  const auth = React.useContext(AuthContext)


  return (
    <BgWithBlur visiblePLayer={false}>
      {/* keyboard dissmis TODO */}
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}>
        <>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../../../assets/berelax.png')}
            />
          </View>
          <KeyboardAvoidingView>
            <View style={styles.inputBody}>
              <Formik
                validationSchema={nameValidationSchema}
                initialValues={{
                  fullName: auth.userFeatures.fullName,
                }}
                onSubmit={values => {
                  console.log(values)
                  if (values.fullName != "") {
                    firestore().collection("users").doc(auth.user.uid).update({
                      fullName: values.fullName
                    })
                    navigation.goBack();
                  }
                }}>
                {({ handleChange, setFieldValue, handleBlur, handleSubmit, errors,values }) => (
                  <React.Fragment>

                    <View style={styles.searchSection}>
                      <Human2 style={styles.searchIcon} width="30" height="30" />
                      <TextInput
                        name="fullName"
                        style={styles.inputStyle}
                        value={values.fullName}
                        onChangeText={(text) => {
                          setFieldValue('fullName', text)
                        }}
                        placeholder="Ad Soyad"
                        placeholderTextColor="white"
                      />
                      <Tick style={styles.TickIcon} width="30" height="30" />
                    </View>
                    {errors.fullName &&
                      <Text style={{ fontSize: 15, color: 'red' }}>{errors.fullName}</Text>
                    }
                    <View style={{ width: '80%' }}>
                      <PurpleButton onPress={handleSubmit} theme={{ marginTop: 20, width: '100%' }}>
                        Güncelle
                      </PurpleButton>
                    </View>
                  </React.Fragment>
                )}
              </Formik>
            </View>
          </KeyboardAvoidingView>
        </>
      </TouchableWithoutFeedback>
    </BgWithBlur>
  );
};

export default UpdAccScreen;

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
    fontWeight: '600',
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

  subHrStyle: {
    marginBottom: wp('30%'),
    marginLeft: wp('5%'),
    marginRight: wp('10%'),
    height: '50%',
    width: 0.7,
    backgroundColor: 'rgba(255,255,255,0.5)',
    display: "none"
  },
});
