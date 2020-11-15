import React from 'react';
import {View} from 'react-native';
import Topbar from '../components/Topbar';

const Profile = (props) => {
  return (
    <View>
      <Topbar
        title={'Profile'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
    </View>
  );
};

export default Profile;
