import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {PT_COLORS} from '../../config';
const PTTextInput = ({label, style, labelWrapperStyle}) => {
  return (
    <View style={{...styles.wrapper, ...style}}>
      <View style={{...styles.labelWrapper, ...labelWrapperStyle}}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput style={styles.textinput} />
    </View>
  );
};

export default PTTextInput;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  textinput: {
    borderWidth: 1,
    borderColor: PT_COLORS.secondaryDark,
    height: 50,
  },
  label: {
    color: PT_COLORS.primaryDark,
  },
  labelWrapper: {
    zIndex: 10,
    position: 'absolute',
    left: 20,
    top: -10,
    backgroundColor: PT_COLORS.secondaryLight,
    paddingHorizontal: 8,
  },
});
