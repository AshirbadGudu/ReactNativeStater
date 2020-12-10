import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AppChart from '../components/AppChart';
import {COLORS} from '../config/Colors';
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const ChartUI = () => {
  return (
    <ScrollView>
      <AppChart
        dataArr={days}
        title="Weekly Report"
        colors={{
          backgroundColor: COLORS.LIGHT,
          backgroundGradientFrom: COLORS.LIGHT,
          backgroundGradientTo: COLORS.FACEBOOK,
        }}
      />
      <AppChart
        dataArr={months}
        title="Monthly Report"
        colors={{
          backgroundColor: COLORS.PHONE,
          backgroundGradientFrom: COLORS.PHONE,
          backgroundGradientTo: COLORS.FACEBOOK,
        }}
      />
    </ScrollView>
  );
};

export default ChartUI;
