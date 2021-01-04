import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {PT_COLORS} from '../config';
import {Header, PTTextInput} from '../components';

const ChangePassword = (props) => {
  return (
    <>
      <Header
        title="Change Password"
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
      />
      <ScrollView style={{padding: 14}}>
        <Card>
          <Card.Title
            title="Change Password"
            left={(props) => (
              <Ionicons
                name="key-outline"
                color={PT_COLORS.secondaryDark}
                {...props}
              />
            )}
          />
          <Card.Content>
            <PTTextInput
              labelWrapperStyle={{backgroundColor: '#fff'}}
              style={{marginVertical: 10}}
              label="Current Password"
            />
            <PTTextInput
              labelWrapperStyle={{backgroundColor: '#fff'}}
              style={{marginVertical: 10}}
              label="New Password"
            />
            <PTTextInput
              labelWrapperStyle={{backgroundColor: '#fff'}}
              style={{marginVertical: 10}}
              label="Verify Password"
            />
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => {}}
              mode="contained"
              style={{marginVertical: 10, width: '100%'}}
              color={PT_COLORS.secondaryDark}>
              Save Changes
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
};

export default ChangePassword;
