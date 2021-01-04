import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PTButton, PTTextInput} from '../components';
import {PT_COLORS} from '../config';
import {useAppContext} from '../config/AppContext';

const SignIn = (props) => {
  const {login} = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.signUpHeadeing}>Pack & Take</Text>

      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 20,
          fontSize: 24,
        }}>
        Sign In
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <PTTextInput label="Email" />
        </View>
        <View style={styles.inputWrapper}>
          <PTTextInput label="Password" />
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={login}
            title="Sign In"
            buttonBackgroundColor="#333"
            buttonTextColor="#fff"
          />
        </View>
        <TouchableOpacity style={styles.wrapper} onPress={() => {}}>
          <Text style={{textAlign: 'center', color: PT_COLORS.primaryGrey}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 32,
              color: PT_COLORS.primaryGrey,
            }}>
            - OR -
          </Text>
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log('Pressed Apple');
            }}
            title="Continue With Apple"
            buttonBackgroundColor="#000"
            buttonTextColor="#fff"
          />
        </View>
        <View style={styles.wrapper}>
          <PTButton
            style={styles.signupBtn}
            onPress={() => {
              console.log('Pressed Apple');
            }}
            title="Continue With Facebook"
            buttonBackgroundColor="#4267B2"
            buttonTextColor="#fff"
          />
        </View>
        <View style={styles.wrapper}>
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
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PT_COLORS.secondaryLight,
  },
  signUpHeadeing: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 30,
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  wrapper: {
    marginVertical: 2,
  },
  inputWrapper: {
    marginVertical: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
