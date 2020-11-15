import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';
import Feedback from '../screens/Feedback';
import About from '../screens/About';
const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default SearchStack;
