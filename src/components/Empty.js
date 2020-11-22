import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Title, Subheading} from 'react-native-paper';
import {COLORS} from '../config/Colors';
import {height} from '../config/Style';

const Empty = ({navigateTo, title, subheading, icon, btnText}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Title style={{marginVertical: 10}}>{title}</Title>
      <Subheading style={{marginVertical: 10}}>{subheading}</Subheading>
      <Button
        color={COLORS.GOOGLE}
        mode="contained"
        onPress={navigateTo}
        style={{marginVertical: 15}}>
        {btnText}
      </Button>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    height: height / 1.435,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
