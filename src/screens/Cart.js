import React from 'react';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart = (props) => {
  return (
    <>
      <Topbar
        title={'Cart'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
    </>
  );
};

export default Cart;
