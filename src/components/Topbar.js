import React from 'react';
import {Appbar} from 'react-native-paper';
import {COLORS} from '../config/Colors';

const Topbar = (props) => {
  return (
    <Appbar.Header style={{backgroundColor: COLORS.SECONDARY}}>
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
};

export default Topbar;
