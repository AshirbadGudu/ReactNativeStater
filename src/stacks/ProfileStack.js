import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Feedback from '../screens/Feedback';
import About from '../screens/About';
const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
