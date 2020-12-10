import React from 'react';
import {View, Dimensions} from 'react-native';
import {Title} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {COLORS} from '../config/Colors';

const AppChart = ({dataArr, title, colors}) => {
  return (
    <View style={{padding: 10}}>
      <Title>{title}</Title>
      <LineChart
        data={{
          labels: dataArr,
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={220}
        yAxisLabel="₹"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: colors.backgroundColor,
          backgroundGradientFrom: colors.backgroundGradientFrom,
          backgroundGradientTo: colors.backgroundGradientTo,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: COLORS.PHONE,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default AppChart;
