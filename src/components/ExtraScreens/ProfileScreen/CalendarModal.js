import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { WhiteText } from '../../CustomComponents/CustomText';
import { Calendar } from 'react-native-calendars';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import * as CONSTANTS from '../../../Helper/Constants';

const CalendarModal = ({ isVsblModal, setIsVsblModal, title }) => {
  return (
    <Modal visible={isVsblModal} animationType="slide">
      <StatusBar hidden />
      <BgWithBlur visiblePLayer={false}>
        <TouchableWithoutFeedback onPress={setIsVsblModal}>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              top: '5%',
              zIndex: 1000,
            }}>
            <WhiteText theme={{ fontSize: 15, textDecorationLine: 'underline' }}>
              Geri
            </WhiteText>
          </View>
        </TouchableWithoutFeedback>

        <View
          style={{
            height: CONSTANTS.heightPercentage(15),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <WhiteText theme={{ fontSize: 24 }}>{title}</WhiteText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <WhiteText>TOPLAM</WhiteText>
            <WhiteText>1 be relax</WhiteText>
          </View>
          <View>
            <WhiteText>TOPLAM</WhiteText>
            <WhiteText>1 be relax</WhiteText>
          </View>
          <View>
            <WhiteText>TOPLAM</WhiteText>
            <WhiteText>1 be relax</WhiteText>
          </View>
        </View>
        <View
          style={{
            flex: 5,
          }}>
          <Calendar
            markedDates={{
              '2020-07-01': {
                selected: true,
                marked: true,
                selectedColor: 'black',
              },
              '2012-05-17': { marked: true },
              '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
              '2012-05-19': { disabled: true, disableTouchEvent: true },
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: CONSTANTS.widthPercentage(10),
          }}>
          <WhiteText>TOPLAM</WhiteText>
          <WhiteText>1 be relax</WhiteText>
        </View>
      </BgWithBlur>
    </Modal>
  );
};

export default CalendarModal;
