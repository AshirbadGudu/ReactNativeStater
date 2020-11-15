import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Feedback from '../screens/Feedback';
const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
