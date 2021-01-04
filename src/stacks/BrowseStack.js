import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Browse} from '../screens';

const Stack = createStackNavigator();

const BrowseStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Browse" component={Browse} />
    </Stack.Navigator>
  );
};

export default BrowseStack;
