import React from 'react';
import {DiscoverStack, BrowseStack, FavoritesStack, MoreStack} from './stacks';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {PT_COLORS} from './config';
const Tab = createMaterialBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator
      shifting={false}
      barStyle={{
        backgroundColor: PT_COLORS.bottomBarColor,
      }}>
      <Tab.Screen
        name="DiscoverTab"
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color}) => (
            <Ionicons name="compass-outline" color={color} size={24} />
          ),
          tabBarColor: PT_COLORS.primaryBlack,
        }}
        component={DiscoverStack}
      />
      <Tab.Screen
        name="BrowseTab"
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color}) => (
            <Feather name="shopping-bag" color={color} size={24} />
          ),
          tabBarColor: PT_COLORS.primaryBlack,
        }}
        component={BrowseStack}
      />
      <Tab.Screen
        name="FavoritesTab"
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" color={color} size={24} />
          ),
          tabBarColor: PT_COLORS.primaryBlack,
        }}
        component={FavoritesStack}
      />
      <Tab.Screen
        name="MoreTab"
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Feather name="more-horizontal" color={color} size={24} />
          ),
          tabBarColor: PT_COLORS.primaryBlack,
        }}
        component={MoreStack}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoute;
