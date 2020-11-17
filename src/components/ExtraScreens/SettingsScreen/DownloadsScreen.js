import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as CONSTANTS from '../../../Helper/Constants';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import {WhiteText} from '../../CustomComponents/CustomText';

const DownloadsScreen = () => {
  return (
    <BgWithBlur  visiblePLayer = {false}>
      <View style={styles.title}>
        <WhiteText theme={{fontSize: 24}}>Yüklemeler</WhiteText>
      </View>

      <View
        style={{
          marginHorizontal: (CONSTANTS.SCREEN_WIDTH / 100) * 20,
        }}>
        <View style={styles.dwRow}>
          <WhiteText>asd</WhiteText>
          <WhiteText>Meditasyonları Sil</WhiteText>
          <WhiteText>0 kb</WhiteText>
        </View>
        <View style={styles.dwRow}>
          <WhiteText>asd</WhiteText>
          <WhiteText>Uykuyu Sil</WhiteText>
          <WhiteText>0 kb</WhiteText>
        </View>
        <View style={styles.dwRow}>
          <WhiteText>asd</WhiteText>
          <WhiteText>Müzikleri Sil</WhiteText>
          <WhiteText>0 kb</WhiteText>
        </View>
        <View style={styles.dwRow}>
          <WhiteText>asd</WhiteText>
          <WhiteText>Temasları Sil</WhiteText>
          <WhiteText>0 kb</WhiteText>
        </View>
      </View>
    </BgWithBlur>
  );
};

export default DownloadsScreen;

const styles = StyleSheet.create({
  title: {
    height: CONSTANTS.heightPercentage(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dwRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: CONSTANTS.heightPercentage(2),
  },
});
