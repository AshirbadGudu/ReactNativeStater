import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Calendar} from 'react-native-calendars';

const CalenderUI = () => {
  return (
    <ScrollView>
      <Calendar current={new Date()} />
    </ScrollView>
  );
};

export default CalenderUI;
