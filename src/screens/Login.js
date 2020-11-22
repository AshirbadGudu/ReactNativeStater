import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Card, Subheading, Title} from 'react-native-paper';
import {useAppContext} from '../config/AppContext';
import {COLORS} from '../config/Colors';
const Login = (props) => {
  const {login} = useAppContext();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/icon.png')}
            style={{width: 100, height: 100, resizeMode: 'center'}}
          />
        </View>
        <View style={styles.footer}>
          <Card style={{padding: 20}}>
            <Title style={{textAlign: 'center'}}>Welcome To App Name</Title>
            <Subheading style={{textAlign: 'center'}}>
              login or sign up to our app
            </Subheading>
            <Card.Content>
              <Button
                onPress={() => login()}
                color={COLORS.PRIMARY}
                style={{marginVertical: 5}}
                mode="contained">
                Sign In
              </Button>
              <Button
                onPress={() => {}}
                color={COLORS.PRIMARY}
                style={{marginVertical: 5}}
                mode="outlined">
                Sign Up
              </Button>
            </Card.Content>
          </Card>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    padding: 30,
  },
});
export default Login;
