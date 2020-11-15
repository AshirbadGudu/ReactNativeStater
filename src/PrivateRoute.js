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
    <Tab.Navigator barStyle={{backgroundColor: COLORS.SECONDARY}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
        }}
        component={SearchStack}
      />
      <Tab.Screen
        name="ProfileTab"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoute;
