import React from 'react';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Feedback from '../screens/Feedback';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
};

export default HomeStack;
