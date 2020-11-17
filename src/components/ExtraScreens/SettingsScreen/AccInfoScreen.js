import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as CONSTANTS from '../../../Helper/Constants';
import {WhiteText} from '../../CustomComponents/CustomText';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import {PurpleButton} from '../../CustomComponents/CustomButtons';

const AccInfoScreen = () => {
  return (
    <BgWithBlur  visiblePLayer = {false}>
      <View style={styles.titleStyle}>
        <WhiteText theme={{fontSize: 24}}>Aboneliği Yönet</WhiteText>
      </View>
      <View style={styles.subTitle}>
        <WhiteText theme={{fontSize: 18}}>ios'a abone olun</WhiteText>
      </View>
      <View
        style={{
          height: CONSTANTS.heightPercentage(20),
          width: '90%',
          justifyContent: 'center',
          marginHorizontal: 20,
        }}>
        <WhiteText theme={{textAlign: 'center'}}>
          aboneliğin 20 nisan 2020 tarihinde sonlanıcak
        </WhiteText>
        <WhiteText theme={{textAlign: 'center'}}>
          abonelik işlemini yenilemen için
        </WhiteText>
        <WhiteText theme={{textAlign: 'center'}}>
          itunes üzerinden yenileme{' '}
        </WhiteText>
        <WhiteText theme={{textAlign: 'center'}}>yapmak geremekte </WhiteText>
      </View>
      <View
        style={{
          height: CONSTANTS.heightPercentage(10),
          alignItems: 'center',
        }}>
        <PurpleButton theme={{width: '90%'}}>
          Soruların için yardım merkezini ziyaret et
        </PurpleButton>
      </View>
    </BgWithBlur>
  );
};

export default AccInfoScreen;

const styles = StyleSheet.create({
  titleStyle: {
    height: CONSTANTS.heightPercentage(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    height: CONSTANTS.heightPercentage(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
