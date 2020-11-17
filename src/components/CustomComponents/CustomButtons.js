import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as CONSTANTS from '../../Helper/Constants';

export const PurpleButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
        colors={['#3C1C46', '#1F1645']}
        style={[styles.button, props.theme]}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          {props.children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export const GreenButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={['#8E9531', '#66A22E']}
        style={[styles.button, props.theme]}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          {props.children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};



export const PurpleTab = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient colors={['#3C1C46', '#1F1645']} 
      style={[props.theme]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      >
        <Text style={{color: 'white', textAlign: 'center'}}>
          {props.children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// export const GreenButton = props => {
//   return (
//     <TouchableOpacity style={styles.whiteText}>
//       <Text>{props.children}</Text>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  button: {
    width: CONSTANTS.SCREEN_WIDTH / 2.5,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
    backgroundColor: 'purple',
  },
});
