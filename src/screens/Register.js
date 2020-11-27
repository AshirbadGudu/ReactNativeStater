import React from 'react';
import { View, Image, KeyboardAvoidingView, Text } from 'react-native';
import { Button, Card, TextInput, Title } from 'react-native-paper';
import { useAppContext } from '../config/AppContext';
import { COLORS } from '../config/Colors';
import { AuthStyle } from '../config/Style';

const Register = (props) => {
  const { login } = useAppContext();

  return (
    <KeyboardAvoidingView style={AuthStyle.container}>
      <Card style={{ paddingTop: 20 }}>
        <Image source={require('../assets/icon.png')} style={{ resizeMode: 'contain', width: '100%', height: '25%' }} />
        <Title style={{ textAlign: 'center' }}>Register</Title>
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
          <TextInput
            style={{ marginBottom: 10 }}
            secureTextEntry={true}
            mode="outlined"
            label="Confirm Your Password"
            autoCapitalize="none"
          />
          <Button
            onPress={() => login()}
            color={COLORS.PRIMARY}
            style={{ marginVertical: 5 }}
            mode="contained">
            Register
            </Button>
          <View style={AuthStyle.Row}>
            <Text>Already Have An Account?</Text>
            <Button onPress={() => props.navigation.goBack()}>
              Login
              </Button>
          </View>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
};

export default Register;
