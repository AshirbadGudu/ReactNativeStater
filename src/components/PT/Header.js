import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = (props) => {
  return (
    <View style={{}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingVertical: 10,
          marginTop: 1,
          backgroundColor: '#333',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.left && props.left.onPress();
          }}
          style={{alignSelf: 'center', marginLeft: 10}}>
          {props.left && props.left.icon}
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Ionicons name="location-outline" color="#fff" size={16} />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 18,
              marginHorizontal: 5,
            }}>
            {props.title}
          </Text>
          <Ionicons name="chevron-down-outline" color="#fff" size={16} />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 12,
            }}>
            With In 3 Km
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
