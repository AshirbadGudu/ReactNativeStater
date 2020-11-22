import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SLIDES} from '../config/Slides';
import {COLORS} from '../config/Colors';
import {Button} from 'react-native-paper';

export default class Onboarding extends Component {
  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Image
          source={{uri: item.image}}
          style={{resizeMode: 'contain', height: '73%', width: '100%'}}
        />
        <Text
          style={{
            paddingBottom: 10,
            paddingTop: 25,
            fontSize: 23,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            paddingHorizontal: 30,
            fontSize: 15,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          {item.text}
        </Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons name="arrow-forward" size={24} color="#eee" />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons name="checkmark-done" size={24} color="#eee" />
      </View>
    );
  };
  _renderSkipButton = () => <Button color={COLORS.PRIMARY}>SKIP NOW</Button>;
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={SLIDES}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
        activeDotStyle={{backgroundColor: COLORS.SECONDARY, width: 30}}
        onDone={() => this.props.navigation.navigate('Login')}
        showSkipButton
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.SOFTER,
    color: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
