/**
 * React Native Stater App
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/Router';
import {AuthProvider} from './src/config/AppContext';

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
