import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import { WhiteText } from '../../CustomComponents/CustomText';
import * as CONSTANTS from '../../../Helper/Constants';
import { PurpleButton } from '../../CustomComponents/CustomButtons';
import TimeModal from './TimeModal';
import { AuthContext } from "../../Auth/Auth"
import firestore from "@react-native-firebase/firestore"
import PushNotification from "react-native-push-notification"
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AttentionReminder = () => {
  const auth = React.useContext(AuthContext)

  const [selectedHours, setSelectedHours] = useState(auth.userFeatures.attentionReminder.hour);
  const [selectedMinutes, setSelectedMinutes] = useState(auth.userFeatures.attentionReminder.minute);
  const [isEnabled, setIsEnabled] = useState(auth.userFeatures.attentionReminder.isActive);
  const [isVsblModal, setIsVsblModal] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const updateFirebase = () => {
    let notification = {
      hour: selectedHours,
      minute: selectedMinutes,
      isActive: !isEnabled
    }

    firestore().collection("users").doc(auth.user.uid).update({
      attentionReminder: notification
    })

  }

  React.useEffect(() => {
    if (auth.userFeatures.attentionReminder.minute != selectedMinutes || auth.userFeatures.attentionReminder.hour != selectedHours) {
      updateFirebase();
      setIsEnabled(false)
      PushNotification.cancelLocalNotifications({ id: '1' })
    }
  }, [selectedMinutes, selectedHours])


  const makeNotify = () => {
    setIsEnabled(!isEnabled)

    if (!isEnabled) {
      let d = new Date()
      PushNotification.localNotificationSchedule({
        id: 1,
        channelId: "channel-id",
        title: "Dikkat Hatırlatıcısı", // (optional)
        message: "Dikkat Hatırlatıyorum", // (required)
        repeatType: "day",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), selectedHours, selectedMinutes, 0, 0)
      });
    } else {
      PushNotification.cancelLocalNotifications({ id: '1' })
    }

    updateFirebase();
  }
  const onTimeChange = (slctdDate) => {
    const currentDate = slctdDate;
    setSelectedTime(currentDate)
    setSelectedHours(makeTwoDigits(currentDate.getHours()));
    setSelectedMinutes(makeTwoDigits(currentDate.getMinutes()));
    setShow(false)
  }

  function makeTwoDigits(time) {
    const timeString = `${time}`;
    if (timeString.length === 2) return time;
    return `0${time}`;
  }

  return (
    <BgWithBlur visiblePLayer={false}>
      <View style={styles.title}>
        <View style={styles.subHrStyle}></View>
        <WhiteText theme={{ fontSize: 24 }}>Dikkat Hatırlatıcısı</WhiteText>
      </View>
      <View style={styles.subTitle}>
        <WhiteText>Günlük olarak dikkat ederek uykuyu iyileştirin,</WhiteText>
        <WhiteText>odağı geliştirin ve yaşam kalitenizi arttırın</WhiteText>
      </View>
      {
        show &&
        <DateTimePickerModal
          isVisible={show}
          mode="time"
          onConfirm={onTimeChange}
          onCancel={() => { setShow(false) }}
        />
      }

      <View style={styles.btnHeight}>
        <TouchableWithoutFeedback onPress={() => setShow(true)}>
          <Text style={styles.timeBtn}>
            {selectedHours}:{selectedMinutes}
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.switchWrapper}>
        <WhiteText>Hatırlatmalara Al</WhiteText>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => makeNotify()}
          value={isEnabled}
        />
      </View>
    </BgWithBlur>
  );
};

export default AttentionReminder;

const styles = StyleSheet.create({
  title: {
    height: CONSTANTS.heightPercentage(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('37%')
  },
  subTitle: {
    height: CONSTANTS.heightPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',

  },
  switchWrapper: {
    height: CONSTANTS.heightPercentage(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnHeight: {
    height: CONSTANTS.heightPercentage(20),
    alignItems: 'center',
  },
  timeBtn: {
    width: CONSTANTS.SCREEN_WIDTH / 2,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 0.3,
    borderRadius: 30,
    borderColor: 'white',
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  updBtn: {
    height: CONSTANTS.heightPercentage(25),
    alignItems: 'center',
    justifyContent: 'center',
  },

  subHrStyle: {
    marginTop: wp('2%'),
    marginRight: wp('5%'),
    width: '50%',
    height: 0.7,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },


});
