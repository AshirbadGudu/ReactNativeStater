import React from 'react';
import {useAppContext} from './config/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from './components/SideBar';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {COLORS} from './config/Colors';
const Drawer = createDrawerNavigator();

const Router = () => {
  const {user, loading} = useAppContext();
  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={loading}
      logoImage={require('./assets/icon.png')}
      backgroundColor={COLORS.PRIMARY}
      logoHeight={150}
      logoWidth={150}>
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
    </AnimatedSplash>
  );
};

export default Router;
