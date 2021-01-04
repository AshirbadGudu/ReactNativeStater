import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const PTButton = ({onPress, title, buttonBackgroundColor, buttonTextColor}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: buttonBackgroundColor,
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginVertical: 10,
          borderRadius: 8,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
          }}>
          {title ? title : 'Button'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PTButton;
