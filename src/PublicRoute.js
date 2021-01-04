import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetPassword, SignIn, SignUp, Welcome} from './screens';

const PublicStack = createStackNavigator();

const PublicRoute = () => {
  return (
    <>
      <PublicStack.Navigator screenOptions={{headerShown: false}}>
        <PublicStack.Screen name="Welcome" component={Welcome} />
        <PublicStack.Screen name="SignIn" component={SignIn} />
        <PublicStack.Screen name="SignUp" component={SignUp} />
        <PublicStack.Screen name="ForgetPassword" component={ForgetPassword} />
      </PublicStack.Navigator>
    </>
  );
};

export default PublicRoute;
