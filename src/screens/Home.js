import React from 'react';
import {View} from 'react-native';
import Topbar from '../components/Topbar';

const Home = (props) => {
  return (
    <View>
      <Topbar
        title={'Home'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
    </View>
  );
};

export default Home;
