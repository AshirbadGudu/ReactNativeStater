import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Text } from 'react-native';
import { Button, Card, TextInput, Title } from 'react-native-paper';
import { useAppContext } from '../config/AppContext';
import { COLORS } from '../config/Colors';
const Login = (props) => {
  const { login } = useAppContext();

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Card style={{ padding: 20 }}>
          <Image source={require('../assets/icon.png')} style={{ resizeMode: 'contain', width: '100%', height: '25%' }} />
          <Title style={{ textAlign: 'center' }}>Login</Title>
          <Card.Content>
            <TextInput
              style={{ marginBottom: 10 }}
              keyboardType="email-address"
              mode="outlined"
              label="Enter Email ID"
              autoCapitalize="none"
            />
            <TextInput
              style={{ marginBottom: 10 }}
              secureTextEntry={true}
              mode="outlined"
              label="Enter Your Password"
              autoCapitalize="none"
            />
            <View style={styles.Right}>
              <Button onPress={() => props.navigation.navigate('ForgetPassword')}>
                Forget Password?
              </Button>
            </View>
            <Button
              onPress={() => login()}
              color={COLORS.PRIMARY}
              style={{ marginVertical: 5 }}
              mode="contained">
              Sign In
            </Button>
            <View style={styles.Row}>
              <Text>Need an account?</Text>
              <Button onPress={() => props.navigation.navigate('Register')}>
                Register Now
              </Button>
            </View>
          </Card.Content>
        </Card>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    justifyContent: "center"
  },
  Right: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  Row: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  }
});