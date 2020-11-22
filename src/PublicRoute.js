import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './screens/Onboarding';
import PhoneAuth from './screens/PhoneAuth';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import OTPScreen from './screens/OTPScreen';
const PublicStack = createStackNavigator();
const PublicRoute = () => {
  return (
    <>
      <PublicStack.Navigator screenOptions={{headerShown: false}}>
        <PublicStack.Screen name="Onboarding" component={Onboarding} />
        <PublicStack.Screen name="Login" component={Login} />
        <PublicStack.Screen name="Register" component={Register} />
        <PublicStack.Screen name="ForgetPassword" component={ForgetPassword} />
        <PublicStack.Screen name="PhoneAuth" component={PhoneAuth} />
        <PublicStack.Screen name="OTPScreen" component={OTPScreen} />
      </PublicStack.Navigator>
    </>
  );
};

export default PublicRoute;
