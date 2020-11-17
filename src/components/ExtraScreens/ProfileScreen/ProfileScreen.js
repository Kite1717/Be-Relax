import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import * as CONSTANTS from '../../../Helper/Constants';
import BgWithBlur from '../../BgWithBlur/BgWithBlur';
import {WhiteText} from '../../CustomComponents/CustomText';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CalendarModal from './CalendarModal';

const data = [
  {id: 1, title: '1 Yıldır Bizimlesin', svgName: '1Year'},
  {id: 2, title: 'Çizelgen', svgName: 'userBoard'},
];

const ProfileScreen = () => {
  const [isVsblModal, setIsVsblModal] = React.useState(false);
  const [title, setTitle] = React.useState('');

  return (
    <BgWithBlur  visiblePLayer = {false}>
      <View style={styles.title}>
        <WhiteText theme={{fontSize: 24}}>Profil</WhiteText>
      </View>
      <CalendarModal
        isVsblModal={isVsblModal}
        setIsVsblModal={val => setIsVsblModal(val)}
        title={title}
      />
      <FlatList
        contentContainerStyle={styles.bodyContainer}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setIsVsblModal(true);
                setTitle(item.title);
              }}>
              <WhiteText>{item.title}</WhiteText>
            </TouchableWithoutFeedback>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </BgWithBlur>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  title: {
    height: CONSTANTS.heightPercentage(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flexGrow: 1,
    marginHorizontal: CONSTANTS.widthPercentage(10),
    alignItems: 'center',
  },
});
