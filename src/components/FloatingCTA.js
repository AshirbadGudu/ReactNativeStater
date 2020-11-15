import React from 'react';
import {FAB} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useAppContext} from '../config/AppContext';

const FloatingCTA = ({icon, backgroundColor}) => {
  const Icon = icon || <Feather name="phone-call" size={24} color="#fff" />;
  const {handelCall} = useAppContext();
  return (
    <FAB
      style={[styles.fab, {backgroundColor: backgroundColor || '#4BB543'}]}
      icon={() => Icon}
      onPress={handelCall}
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
