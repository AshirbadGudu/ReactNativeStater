import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  More,
  EditProfile,
  Settings,
  ChangePassword,
  Language,
  Country,
  Orders,
} from '../screens';
const Stack = createStackNavigator();
const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  );
};

export default MoreStack;
