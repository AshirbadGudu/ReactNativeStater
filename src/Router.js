import React from 'react';
import {useAppContext} from './config/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from './components/SideBar';

const Drawer = createDrawerNavigator();

const Router = () => {
  const {user} = useAppContext();
  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          screenOptions={{headerShown: false}}
          drawerContent={(props) => <SideBar {...props} />}>
          <Drawer.Screen name="PrivateRoute" component={PrivateRoute} />
        </Drawer.Navigator>
      ) : (
        <PublicRoute />
      )}
    </NavigationContainer>
  );
};

export default Router;
