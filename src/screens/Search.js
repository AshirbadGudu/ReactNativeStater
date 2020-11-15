import React from 'react';
import {View} from 'react-native';
import Topbar from '../components/Topbar';

const Search = (props) => {
  return (
    <View>
      <Topbar
        title={'Search'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
    </View>
  );
};

export default Search;
