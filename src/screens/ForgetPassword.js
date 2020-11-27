import React from 'react';
import { View, Image, KeyboardAvoidingView, Text } from 'react-native';
import { Button, Card, TextInput, Title } from 'react-native-paper';
import { useAppContext } from '../config/AppContext';
import { COLORS } from '../config/Colors';
import { AuthStyle } from '../config/Style';
const ForgetPassword = (props) => {
  const { forgetPassword } = useAppContext();
  return (
    <KeyboardAvoidingView style={AuthStyle.container}>
      <Card style={{ paddingTop: 20 }}>
        <Image source={require('../assets/icon.png')} style={{ resizeMode: 'contain', width: '100%', height: '25%' }} />
        <Title style={{ textAlign: 'center' }}>Forget Password</Title>
        <Card.Content>
          <TextInput
            style={{ marginBottom: 10 }}
            keyboardType="email-address"
            mode="outlined"
            label="Enter Email ID"
            autoCapitalize="none"
          />
          <Button
            onPress={() => forgetPassword()}
            color={COLORS.PRIMARY}
            style={{ marginVertical: 5 }}
            mode="contained">
            Send Reset Link
            </Button>
          <View style={AuthStyle.Row}>
            <Text>Don't Want Reset?</Text>
            <Button onPress={() => props.navigation.goBack()}>
              Go Back
              </Button>
          </View>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;
