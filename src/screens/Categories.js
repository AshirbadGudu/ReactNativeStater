import React from 'react';
import Topbar from '../components/Topbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChartUI from './ChartUI';
import ChatUI from './ChatUI';
import CalenderUI from './CalenderUI';
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
          name="ChatUI"
          component={ChatUI}
          options={{title: 'Chat UI'}}
        />
        <Tab.Screen
          name="ChartUI"
          component={ChartUI}
          options={{title: 'Chart UI'}}
        />
        <Tab.Screen
          name="CalenderUI"
          component={CalenderUI}
          options={{title: 'Calender UI'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Categories;
