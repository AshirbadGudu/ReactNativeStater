import React from 'react';
import HomeStack from './stacks/HomeStack';
import ProfileStack from './stacks/ProfileStack';
import SearchStack from './stacks/SearchStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from './config/Colors';
const Tab = createMaterialBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
          tabBarColor: COLORS.LIGHT,
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="SearchTab"
        options={{
          tabBarLabel: 'SEARCH',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
          tabBarColor: COLORS.LIGHTER,
        }}
        component={SearchStack}
      />
      <Tab.Screen
        name="ProfileTab"
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoute;
