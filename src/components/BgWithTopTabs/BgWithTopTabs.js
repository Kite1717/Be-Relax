import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import * as CONSTANTS from '../../Helper/Constants';
import { WhiteText } from '../CustomComponents/CustomText';
import LinearGradient from 'react-native-linear-gradient'
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import firestore from '@react-native-firebase/firestore'

//"white", "#ffffff00"

const BgWithTopTabs = props => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let collection = "blob";
        let tempCategories = [{name:"Hepsi", id:"hepsi-id"}];

        if (props.fromComponent === "meditationScreen") {
            collection = "meditationCategories"
        } else if (props.fromComponent === "sleepScreen") {
            collection = "sleepCategories"
        } else if (props.fromComponent === "musicScreen") {
            collection = "musicCategories"
        } else if (props.fromComponent === "homeScreen") {
            tempCategories = [];
            collection = "blob"
        }


        firestore().collection(collection).get().then(querySnapshots => {
            querySnapshots.docs.map(doc => {
                if (doc.data().blob) {
                } else {
                    tempCategories.push(doc.data())
                }
            })
            setCategories(tempCategories);
        })
        console.log(categories,"asdaldsa")
    }, [])

    useEffect(() => {
        if(categories[activeIndex] !== undefined){
            props.setCategory(categories[activeIndex])
        }
        
    }, [activeIndex])

    //console.log(props.backgroundColor)
    return (
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
            <ImageBackground source={require('../../assets/main_bg.jpg')}
                style={styles.bgImage}>

                <View style={styles.scrollWrapper} >
                    <ScrollView

                        horizontal={true}
                        showsHorizontalScrollIndicator={false} >
                        {categories.map((item, index) => (
                            <TouchableWithoutFeedback key={index.toString()}
                                onPress={() => setActiveIndex(index)} >
                                <LinearGradient
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={

                                        activeIndex === index ? ['#3C1C46', '#1F1645'] :
                                            ["transparent", "#ffffff00"]
                                    }
                                    style={
                                        activeIndex === index ? styles.activeTab : styles.tabCard
                                    }

                                >
                                    <View>
                                        <WhiteText >{item.name}</WhiteText>
                                    </View>
                                </LinearGradient>
                            </TouchableWithoutFeedback>
                        ))}</ScrollView>
                </View>

                {
                    props.visiblePLayer &&
                    <AudioPlayer backgroundColor={props.backgroundColor} navigation={props.navigation} music={props.music} />
                }

                {props.children}
            </ImageBackground>
        </View>
    )
};

export default BgWithTopTabs;

const styles = StyleSheet.create({
    scrollWrapper: {
        height: CONSTANTS.DEVICE.TOP_HEIGHT,
        marginTop: getStatusBarHeight() > 20 ? getStatusBarHeight() - 10 : 0,
    },
    bgImage: {
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',

    },
    tabCard: {
        justifyContent: 'center',
        padding: 5,
        marginVertical: CONSTANTS.heightPercentage(2.32),
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    activeTab: {
        padding: 5,
        marginVertical: CONSTANTS.heightPercentage(2.32),
        marginHorizontal: 10,
        borderRadius: 20,

    },
});