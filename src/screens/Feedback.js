import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import Topbar from '../components/Topbar';
import {COLORS} from '../config/Colors';
import {AirbnbRating} from 'react-native-ratings';

const Feedback = (props) => {
  return (
    <>
      <Topbar
        title={'Feedback'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            backgroundColor: '#fff',
            flex: 1,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/customer-review.png')}
              style={{
                resizeMode: 'center',
                width: 80,
                height: 80,
              }}
            />
          </View>
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
            color={COLORS.PRIMARY}
            icon="send"
            onPress={() => {}}>
            Send Feedback
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default Feedback;
