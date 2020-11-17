import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import * as CONSTANTS from '../../../Helper/Constants';
import { WhiteText } from '../../CustomComponents/CustomText';
import { PurpleButton } from '../../CustomComponents/CustomButtons';
import TimeModal from './TimeModal';
import { AuthContext } from "../../Auth/Auth"
import firestore from "@react-native-firebase/firestore"
import PushNotification from "react-native-push-notification"
import DateTimePickerModal from "react-native-modal-datetime-picker";



const SleepReminder = () => {
  const auth = React.useContext(AuthContext)

  const [isEnabled, setIsEnabled] = useState(auth.userFeatures.sleepReminder.isActive);
  const [selectedHours, setSelectedHours] = useState(auth.userFeatures.sleepReminder.hour);
  const [selectedMinutes, setSelectedMinutes] = useState(auth.userFeatures.sleepReminder.minute);
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
      sleepReminder: notification
    })

  }

  React.useEffect(() => {
    if (auth.userFeatures.sleepReminder.minute != selectedMinutes || auth.userFeatures.sleepReminder.hour != selectedHours) {
      updateFirebase();
      setIsEnabled(false)
      PushNotification.cancelLocalNotifications({ id: '2' })
    }
  }, [selectedMinutes, selectedHours])


  const makeNotify = () => {
    setIsEnabled(!isEnabled)

    if (!isEnabled) {
      let d = new Date()
      PushNotification.localNotificationSchedule({
        id: 2,
        channelId: "channel-id",
        title: "Uykun Gelmedi mi?", // (optional)
        message: "Hadi Uyku Zamanı", // (required)
        repeatType: "day",
        date: new Date(d.getFullYear(), d.getMonth(), d.getDate(), selectedHours, selectedMinutes, 0, 0)
      });
    } else {
      PushNotification.cancelLocalNotifications({ id: '2' })
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
      {
        show &&
        <DateTimePickerModal
          isVisible={show}
          mode="time"
          onConfirm={onTimeChange}
          onCancel={() => { setShow(false) }}
        />
      }

      <View style={styles.title}>
        <View style={styles.subHrStyle}></View>
        <WhiteText theme={{ fontSize: 24 }}>Uyku Hatırlatıcı</WhiteText>
      </View>
      <View style={styles.subTitle}>
        <WhiteText>Her gece aynı saatte</WhiteText>
        <WhiteText>yatmak önemli sağlıklı uyku için</WhiteText>
      </View>
      <View style={styles.secSubTitle}>
        <WhiteText>ne zaman yatağa hazırlanmak istersin</WhiteText>
      </View>
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
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#707070"
          onValueChange={makeNotify}
          value={isEnabled}
        />
      </View>
    </BgWithBlur>
  );
};

export default SleepReminder;

const styles = StyleSheet.create({
  title: {
    height: CONSTANTS.heightPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: wp('37%')
  },
  subTitle: {
    height: CONSTANTS.heightPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHeight: {
    height: CONSTANTS.heightPercentage(20),
    alignItems: 'center',
  },
  secSubTitle: {
    height: CONSTANTS.heightPercentage(10),
    justifyContent: 'center',
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
  switchWrapper: {
    height: CONSTANTS.heightPercentage(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayBtns: {
    height: CONSTANTS.heightPercentage(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  updBtn: {
    alignItems: 'center',
  },

  subHrStyle: {

    marginRight: wp('5%'),
    width: '50%',
    height: 0.7,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
});

const DayButton = props => {
  const [isSelected, setIsSelected] = useState(false);

  defaultStyle = {
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: CONSTANTS.widthPercentage(2),
  };
  return (
    <View
      style={
        isSelected ? { ...defaultStyle, backgroundColor: 'gray' } : defaultStyle
      }>
      <Text style={isSelected ? { color: 'black' } : { color: 'white' }}>
        {props.children}
      </Text>
    </View>
  );
};
