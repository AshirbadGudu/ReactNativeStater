import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Favorites} from '../screens';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
