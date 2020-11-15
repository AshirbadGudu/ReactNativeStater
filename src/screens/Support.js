import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button, Subheading, TextInput, Title} from 'react-native-paper';
import Topbar from '../components/Topbar';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../config/Colors';
import {useAppContext} from '../config/AppContext';
const Support = (props) => {
  const {handelCall} = useAppContext();
  return (
    <>
      <Topbar
        title={'Support'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            backgroundColor: '#fff',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/customer-service.png')}
              style={{
                resizeMode: 'center',
                width: 120,
                height: 120,
              }}
            />
          </View>
          <Title style={{textAlign: 'center', paddingBottom: 10}}>
            Our Support team is here to help you
          </Title>
          <Subheading style={{textAlign: 'center', paddingBottom: 10}}>
            If your are facing any issue please contact to our support team
            immediately. Our team will be always ready to help you.
          </Subheading>
          <Button
            style={{marginTop: 15}}
            mode="contained"
            color="green"
            icon={() => <Feather name="phone-call" color="#fff" size={20} />}
            onPress={handelCall}>
            Call Now
          </Button>
          <Title style={{textAlign: 'center', paddingVertical: 10}}>OR</Title>
          <TextInput
            multiline
            numberOfLines={4}
            mode="outlined"
            label="Write Your Message"
          />

          <Button
            style={{marginTop: 15}}
            mode="contained"
            color={COLORS.SECONDARY}
            icon="send"
            onPress={() => {}}>
            Send Message
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default Support;
