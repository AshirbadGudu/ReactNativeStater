import React from 'react';
import {FAB} from 'react-native-paper';
import {Linking, Platform, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const FloatingCTA = ({icon, backgroundColor}) => {
  const Icon = icon || <Feather name="phone-call" size={24} color="#fff" />;
  const handelClick = () => {
    const number = '7008614546';
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <FAB
      style={[styles.fab, {backgroundColor: backgroundColor || '#4BB543'}]}
      icon={() => Icon}
      onPress={handelClick}
    />
  );
};

export default FloatingCTA;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
