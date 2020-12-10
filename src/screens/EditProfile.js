import React, {useState} from 'react';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../config/Colors';

const EditProfile = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <Topbar
        title="Edit Profile"
        left={{
          onPress: () => props.navigation.goBack(),
          icon: ({color, size}) => (
            <Ionicons name="arrow-back" size={size} color={color} />
          ),
        }}
      />
      <ScrollView style={{padding: 14}}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Avatar.Image
            size={120}
            source={require('../assets/PLACEHOLDER.jpg')}
          />
        </TouchableOpacity>
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          label="Full Name"
          value={name}
          onChangeText={(txt) => setName(txt)}
        />
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          label="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          label="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(txt) => setPhone(txt)}
        />
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          multiline={true}
          numberOfLines={3}
          label="Address"
          value={address}
          onChangeText={(txt) => setAddress(txt)}
        />
        <Button
          onPress={() => {}}
          mode="contained"
          style={{marginVertical: 10}}
          color={COLORS.PRIMARY}>
          Save Changes
        </Button>
      </ScrollView>
    </>
  );
};

export default EditProfile;
