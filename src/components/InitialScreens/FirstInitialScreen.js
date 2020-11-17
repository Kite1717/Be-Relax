import React, {useState} from 'react';
import {WhiteText} from '../CustomComponents/CustomText';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import * as CONSTANTS from '../../Helper/Constants';
import {PurpleButton, GreenButton} from '../CustomComponents/CustomButtons';

import HomeIcon from '../../icons/HomeIcon';
import MedIcon from '../../icons/Meditation';
import HumanIcon from '../../icons/Human';
import Human2Icon from '../../icons/Human2';
import HeartIcon from '../../icons/HeartIcon';
import HandIcon from '../../icons/Hand';

import LinearGradient from 'react-native-linear-gradient'






const FirstInitialScreen = ({navigation}) => {

  const [array,setArray] = useState([
    {
      name  : 'Rahat bir uyku',
      status : false,
      colors:['#3C1C46', '#1F1645'],
      icon : 'moon'

    },
    {
      name  : 'Dinginlik',
      status : false,
      colors:['#8E9531', '#66A22E'],
      icon : 'med'
    },
    {
      name  :  'Fiziksel rahatlık',
      status : false,
      colors:['#3C1C46', '#1F1645'],
      icon : 'human'
    },
    {
      name  : 'Şükran',
      status : false,
      colors:['#8E9531', '#66A22E'],
      icon : 'human2'
    },
    {
      name  : 'Sevgiyi arttırmak',
      status : false,
      colors:['#3C1C46', '#1F1645'],
      icon : 'heart'
    },
    {
      name  : 'Stresi azaltmak',
      status : false,
      colors:['#8E9531', '#66A22E'],
      icon : 'hand'
    }])

    const selectIcon = (name) =>{

      switch(name)
      {
        case 'moon' : 
        return <HomeIcon width="30" height="30" />
        case 'med' : 
        return <MedIcon width="30" height="30" />
        case 'human' : 
        return <HumanIcon width="35" height="35" />
        case 'human2' : 
        return <Human2Icon width="30" height="30" />
        case 'heart' : 
        return <HeartIcon width="30" height="30" />
        case 'hand' : 
        return <HandIcon width="30" height="30" />
        default:
          return;

      }
    }
   
  
  const selectCard = (name) =>{
  
    for(let i = 0 ; i < array.length ; i++)
    {
      if(array[i].name === name)
      {
      
        array[i].status = !array[i].status
        
        break;
      }
    }
    setArray([...array])
  
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background_image.png')}
        style={styles.bgImage}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <WhiteText style={{marginTop: 25, marginBottom: 10}}>
            Stresle vedalaşmak için sana neler gerekli
          </WhiteText>
          <View style={{marginTop: CONSTANTS.ANDROID_SCREEN_HEIGHT / 20}}>
            {array.map((item, index) => (
              <View key={ "choice-" + index.toString()} style={styles.cardWrapper}>
                <View style={styles.cardIcon}>
                  {selectIcon(item.icon)}
                </View>
               
               
                <TouchableWithoutFeedback
                 onPress = {()=> {selectCard(item.name)}}
                >

              
                <LinearGradient
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      colors={
                      item.status ? 
                      item.colors
                       : ["transparent", "#ffffff00"]}

                       style={styles.card }

                    >
               <TouchableOpacity
                onPress = {()=> {selectCard(item.name)}}
                
                ><View style={{flex: 3}}>
                <WhiteText>{item.name}</WhiteText>
              </View></TouchableOpacity>
             
              

                </LinearGradient>
                </TouchableWithoutFeedback>

                 
              
              </View>
            ))}
          </View>
          <View style={styles.buttonRow}>
            <GreenButton
              theme={{marginLeft: 5}}
              onPress={() => navigation.push('SecondInitialScreen')}>
             Daha sonra
            </GreenButton>
            <PurpleButton
              theme={{marginLeft: 5}}
              onPress={() => navigation.push('SecondInitialScreen')}>
              Devam et
            </PurpleButton>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FirstInitialScreen;

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
  cardWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  cardIcon: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    flex: 3,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.3,
    borderRadius: 30,
    borderColor: 'white',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
  },

  buttonRow: {
    marginTop: 30,
    flexDirection: 'row',
  },
  customButtons: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },

 
});
