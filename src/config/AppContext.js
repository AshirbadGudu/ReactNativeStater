import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Alert, BackHandler, Linking, Platform, Share } from 'react-native';

// Create Context For Application
const AppContext = React.createContext();

// Create Custom Hook For Using The Context Data
export const useAppContext = () => useContext(AppContext);
const reducer = (state, action) => {
  switch (action.type) {
    case 'setNewUser':
      return (state = action.payload);

    case 'setOldUser':
      return (state = action.payload);
    case 'logout':
      return (state = null);
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUserDetails] = useReducer(reducer, null);
  const handelShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Stater | A Stater Template for building react native apps.',
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handelExit = () => {
    Alert.alert(
      'Exit App',
      'Are You Sure?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        { text: 'OK', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: true },
    );
  };
  const handelCall = () => {
    const number = '7008614546';
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const login = () => {
    setUserDetails({ type: 'setNewUser', payload: { uid: 'uid' } });
  };
  const register = () => {
    setUserDetails({ type: 'setOldUser', payload: { uid: 'uid' } });
  };
  const logout = () => {
    setUserDetails({ type: 'logout' });
  };
  const forgetPassword = () => {

  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  // Context Data That Need In Application
  const value = {
    loading,
    user,
    handelCall,
    login,
    handelExit,
    handelShare,
    logout,
    forgetPassword,
    register
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
