import {Platform, Dimensions} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height} = Dimensions.get('window');

const IPHONE_STATUS_HEIGHT = getStatusBarHeight();
console.log(getStatusBarHeight())
const IPHONE_BOTTOM_SPACE = getBottomSpace();

export const SCREEN_WIDTH = wp('100%');
export const ANDROID_SCREEN_HEIGHT = hp('100%');

const IPHONE_SCREEN_HEIGHT =
  height - IPHONE_BOTTOM_SPACE - IPHONE_STATUS_HEIGHT;

const percentage = (Dimension, percentage) => {
  return (Dimension / 100) * percentage;
};

const ANDROID = {
  TOP_HEIGHT: hp('7%'),
  TITLE_HEIGHT: hp('5%'),
  BODY_HEIGHT: hp('80%'),
  BOTTOM_MENU_HEIGHT: hp('8%'),
  ALBUM_CARD_HEIGHT: hp('80%') / 2.3,
};

const IPHONE = {
  TOP_HEIGHT: percentage(IPHONE_SCREEN_HEIGHT, 8), // +2 marginden geliyor
  TITLE_HEIGHT: percentage(IPHONE_SCREEN_HEIGHT, 5),
  BODY_HEIGHT: percentage(IPHONE_SCREEN_HEIGHT, 75),
  BOTTOM_MENU_HEIGHT: percentage(IPHONE_SCREEN_HEIGHT, 10),
  ALBUM_CARD_HEIGHT: percentage(IPHONE_SCREEN_HEIGHT, 60) / 2,
};

export const DEVICE = Platform.OS === 'android' ? ANDROID : IPHONE;

export const heightPercentage = percentageVal => {
  const height =
    DEVICE === 'android'
      ? hp('100')
      : IPHONE_SCREEN_HEIGHT - percentage(IPHONE_SCREEN_HEIGHT, 10);
  return percentage(height, percentageVal);
};

export const widthPercentage = percentageVal => {
  return percentage(SCREEN_WIDTH, percentageVal);
};

export const albumCardWidth = SCREEN_WIDTH / 2.3;
export const albumHorCardWidth = SCREEN_WIDTH / 1.1;
export const albumCardMargin = wp('2%');
export const numOfCard = SCREEN_WIDTH / (albumCardWidth + albumCardMargin * 2);
