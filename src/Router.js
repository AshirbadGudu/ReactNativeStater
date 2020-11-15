import React from 'react';
import {useAppContext} from './config/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Router = () => {
  const {user} = useAppContext();
  return (
    <NavigationContainer>
      {user ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
};

export default Router;
