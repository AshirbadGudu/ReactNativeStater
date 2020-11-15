import React, {useContext, useEffect, useReducer, useState} from 'react';

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
    default:
      return state;
  }
};
export const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUserDetails] = useReducer(reducer, null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);

    setUserDetails({type: 'setNewUser', payload: {uid: 'uid'}});
  }, []);

  // Context Data That Need In Application
  const value = {loading, user};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
