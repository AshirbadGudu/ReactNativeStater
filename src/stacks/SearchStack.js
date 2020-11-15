import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';
import Feedback from '../screens/Feedback';
const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
};

export default SearchStack;
