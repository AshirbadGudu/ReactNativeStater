import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
