import React from 'react';
import Topbar from '../components/Topbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoryTwo from './CategoryTwo';
import CategoryOne from './CategoryOne';
const Tab = createMaterialTopTabNavigator();

const Categories = (props) => {
  return (
    <>
      <Topbar
        title={'Categories'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="CategoryOne"
          component={CategoryOne}
          options={{title: 'Category One'}}
        />
        <Tab.Screen
          name="CategoryTwo"
          component={CategoryTwo}
          options={{title: 'Category Two'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Categories;
