import React from 'react';
import {StatusBar} from 'react-native';
import {useAppContext} from './config/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {PT_COLORS} from './config';
import {LOGO} from './assets';

const Router = () => {
  const {user, loading} = useAppContext();
  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={loading}
      logoImage={LOGO}
      backgroundColor={PT_COLORS.splashColor}
      logoHeight={150}
      logoWidth={150}>
      <NavigationContainer>
        <StatusBar backgroundColor={PT_COLORS.secondaryBlack} />
        {user ? <PrivateRoute /> : <PublicRoute />}
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default Router;
