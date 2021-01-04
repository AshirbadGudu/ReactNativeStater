import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PTButton} from '../components';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.signUpHeadeing}>Pack & Take</Text>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/6101716/pexels-photo-6101716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            cache: 'only-if-cached',
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formWrap}>
          <Text style={styles.subHeading}>
            Save Delicious Food and Fight Food Waste
          </Text>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}
            title="Sign In"
            buttonBackgroundColor="#333"
            buttonTextColor="#fff"
          />
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log('Pressed Apple');
            }}
            title="Continue With Apple"
            buttonBackgroundColor="#000"
            buttonTextColor="#fff"
          />
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log('Pressed Facebook');
            }}
            title="Continue With Facebook"
            buttonBackgroundColor="#4267B2"
            buttonTextColor="#fff"
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text>Don't have an account</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signUpHeadeing: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 20,
  },
  imgContainer: {
    flex: 2,
    flexDirection: 'row',
    height: 200,
  },
  formContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formWrap: {
    width: '90%',
  },
  img: {
    width: '100%',
  },
  subHeading: {
    fontSize: 22,
    flexWrap: 'wrap',
    marginVertical: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  footerContainer: {
    flex: 1 / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
