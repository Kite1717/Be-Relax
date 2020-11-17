import React from 'react';
import {StyleSheet, View,ActivityIndicator} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size="large" color="white" style={styles.spinner} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinnerStyle: {
   position :"absolute",
   left : "50%",
   top : '50%',
  },
});
