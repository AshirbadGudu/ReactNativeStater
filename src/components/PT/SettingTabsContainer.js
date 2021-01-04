import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingTabsContainer = (props) => {
  return (
    <View
      style={{
        margin: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#ccc',
          borderBottomWidth: 2,
          paddingBottom: 10,
          backgroundColor: '#fff',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingVertical: 10,
        }}>
        {props.icon || (
          <Ionicons
            style={{marginHorizontal: 10}}
            color="#333"
            size={30}
            name="settings-outline"
          />
        )}
        <Text>{props.title}</Text>
      </View>
      {props.children}
    </View>
  );
};

export default SettingTabsContainer;

const styles = StyleSheet.create({});
