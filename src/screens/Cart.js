import React from 'react';
import Empty from '../components/Empty';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Cart = (props) => {
  return (
    <>
      <Topbar
        title={'Cart'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <Empty
        title="Cart Is Empty"
        subheading="Please add something to cart"
        icon={<Ionicons name="cart-outline" size={50} />}
        navigateTo={() => props.navigation.goBack()}
        btnText="Go Back"
      />
    </>
  );
};

export default Cart;
