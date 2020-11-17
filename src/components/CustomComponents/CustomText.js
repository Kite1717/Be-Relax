import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const WhiteText = props => {
  WhiteText.defaultProps = {
    theme: {},
  };

  return <Text style={[styles.whiteText, props.theme]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
