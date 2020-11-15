import React from 'react';
import {View} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import Topbar from '../components/Topbar';
import {COLORS} from '../config/Colors';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Feedback = (props) => {
  return (
    <>
      <Topbar
        title={'Feedback'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <View style={{padding: 10, backgroundColor: '#fff', flex: 1}}>
        <Title style={{textAlign: 'center', paddingBottom: 20}}>
          Send us your comments, feedback or any new idea to make our service
          better
        </Title>
        <TextInput
          multiline
          numberOfLines={4}
          mode="outlined"
          label="Write Your Comments or Feedback"
        />
        <TextInput
          style={{marginVertical: 10}}
          keyboardType="email-address"
          mode="outlined"
          label="Enter Your Email Address"
        />

        <AirbnbRating
          defaultRating={5}
          size={50}
          onFinishRating={(r) => console.log(r)}
        />

        <Button
          style={{marginTop: 15}}
          mode="contained"
          color={COLORS.SECONDARY}
          icon="send"
          onPress={() => {}}>
          Send Feedback
        </Button>
      </View>
    </>
  );
};

export default Feedback;
