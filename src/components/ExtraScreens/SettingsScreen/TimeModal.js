import React, { useState, useLayoutEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { PurpleButton } from '../../CustomComponents/CustomButtons';
import * as CONSTANTS from '../../../Helper/Constants';
import { } from 'react-native-gesture-handler';
import { WhiteText } from '../../CustomComponents/CustomText';

function makeTwoDigits(time) {
  const timeString = `${time}`;
  if (timeString.length === 2) return time;
  return `0${time}`;
}

const TimeModal = ({
  isVsblModal,
  setIsVsblModal,
  setSelectedMinutes,
  setSelectedHours,
  notificationName,
}) => {
  const [selectedTime, setSelectedTime] = useState(new Date());

  const onTimeChange = (event, slctdDate) => {
    const currentDate = slctdDate || selectedTime;
    setSelectedTime(currentDate)
    console.log(currentDate)
    setSelectedHours(makeTwoDigits(currentDate.getHours()));
    setSelectedMinutes(makeTwoDigits(currentDate.getMinutes()));
  }

  return (
    <Modal visible={isVsblModal} animationType="slide">
      <BgWithBlur visiblePLayer={false}>
        <StatusBar hidden />
        <TouchableWithoutFeedback onPress={setIsVsblModal}>
          <View
            style={{
              height: CONSTANTS.heightPercentage(10),
              justifyContent: 'center',
              marginLeft: CONSTANTS.widthPercentage(5),
            }}>
            <WhiteText theme={{ fontSize: 20, textDecorationLine: 'underline' }}>
              İptal
            </WhiteText>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            height: CONSTANTS.heightPercentage(5),
            alignItems: 'center',
          }}>
          <WhiteText theme={{ fontSize: 20 }}>Alarm Ekle</WhiteText>
        </View>
        
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedTime}
            mode="time"
            is24Hour={false}
            display="spinner"
            onChange={onTimeChange}
            textColor="white"
          />
        <View
          style={{
            alignItems: 'center',
            height: CONSTANTS.heightPercentage(30),
          }}>
          <PurpleButton
            onPress={() => {
              setSelectedHours(makeTwoDigits(selectedTime.getHours()));
              setSelectedMinutes(makeTwoDigits(selectedTime.getMinutes()));
              setIsVsblModal();
            }}>
            Kaydet
          </PurpleButton>
        </View>
      </BgWithBlur>
    </Modal>
  );
};

export default TimeModal;

const styles = StyleSheet.create({});
