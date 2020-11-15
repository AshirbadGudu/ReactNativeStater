import React from 'react';
import {View, Text} from 'react-native';
import {useAppContext} from './config/AppContext';

const Router = () => {
  const {user} = useAppContext();
  return (
    <View>{user ? <Text>Private Route</Text> : <Text>Public Route</Text>}</View>
  );
};

export default Router;
