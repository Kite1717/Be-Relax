import React, { createContext, useState, useEffect, useRef } from 'react';
import LaunchScreen from './LaunchScreen';
import auth, { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

import InitialStackScreen from '../../navigation/InitialStackScreen';
import Tabs from '../Tabs/Tabs';
import AuthStackScreen from '../../navigation/AuthStackScreen';
import firestore from '@react-native-firebase/firestore'

export const AuthContext = createContext(null);


export default function AuthNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDocument, setUserDocument] = useState(null)
  const firstTime = useRef(null);
  const [userFeatures, setUserFeatures] = useState(null)
  const [specialAlbums, setSpecialAlbums] = useState(null);

  // Daha önce girmemiş user false firstTime null
  // Daha önce girmiş user true firstTime 0
  // Daha önce girmiş user false firstTime 0

  console.log(Platform.OS)

  const getInfo = () => {

  }
  useEffect(() => {
   
      Promise.all([getUserFeatures(), setAsyncStorage(), handleSpecialAlbums()]).then(() => setLoading(false))
    


  }, [user]);

  const getUserFeatures = async () => {
    setTimeout(async () => {
      await firestore().collection("users").doc(user.uid)
        .get().then(doc => {
          setUserFeatures(doc.data())
        })
    }, 100);

  }

  const renderStacks = () => {



    if (user !== null && user !== undefined && userFeatures !== null && specialAlbums !== null) {
      return (
        <AuthContext.Provider value={{ user, userFeatures, specialAlbums }}>
          <Tabs />
        </AuthContext.Provider>
      );
    }
    else if (firstTime.current === null && !user) {

      return <InitialStackScreen />;
    } else if(!user){
      return <AuthStackScreen />;
    }
  };

  const setAsyncStorage = async () => {
    setTimeout(async () => {
      firstTime.current = await AsyncStorage.getItem('firstTime');
    }, 100);

  };

  useEffect(() => {
    //auth().signOut()
    //AsyncStorage.clear();
    //setLoading(false);

    setLoading(true);
    const authSubscriber = auth().onAuthStateChanged(user => {
      setUser(user);

    })

    return authSubscriber

  }, [user]);

  const handleSpecialAlbums = async () => {
    setTimeout(async () => {
      if(user && !specialAlbums){
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxauyftkısaykahfktwalfıyafowyelbfouewsoıfunsbeovödvftwelhçfjwhuevsdkfıwjaıshfuveguwıauıodnufıegvserpfegıvyıhjnd")
        let albumNames = ["meditationAlbums", "musicAlbums", "sleepAlbums"];
      let albums = [];
      let temp = [];


      for (let i = 0; i < albumNames.length; i++) {
        await firestore().collection(albumNames[i]).get().then(querySnapshots => {
          querySnapshots.docs.forEach(doc => {
            if (doc.data().blob) {
            } else {
              albums.push(
                doc.data()
              );
            }
          });
        })
      }


      for (let j = 0; j < 5; j++) {
        console.log(albums.length)
        let rand = Math.floor(Math.random() * albums.length)
        console.log(rand, "rand")
        temp.push(albums[rand])
        albums.splice(rand, 1)
        setSpecialAlbums(temp)
      }
      }
    }, 100)

  }


  return <>{loading ? <LaunchScreen /> : renderStacks()}</>;
}
