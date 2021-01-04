import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RIGHT_ARROW, SETTINGS_IMG} from '../../assets';

const SettingTabs = (props) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 84,
          flex: 1,
          paddingVertical: 10,
          marginTop: 1,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        }}>
        <View style={{flex: 6, alignSelf: 'center', marginLeft: 10}}>
          <Text>{props.title}</Text>
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          <Image source={RIGHT_ARROW} style={{width: 12, height: 12}} />
        </View>
      </View>
    </View>
  );
};

export default SettingTabs;

const styles = StyleSheet.create({});
