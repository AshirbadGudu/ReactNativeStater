import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../screens/Categories';

const Stack = createStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
