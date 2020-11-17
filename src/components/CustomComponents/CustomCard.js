import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const WhiteText = props => {
  return <Text style={styles.whiteText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
