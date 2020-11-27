import React from 'react';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfile = (props) => {
  return (
    <>
      <Topbar
        title="Edit Profile"
        left={{
          onPress: () => props.navigation.goBack(),
          icon: <Ionicons name="arrow-back" size={24} color="#fff" />,
        }}
      />
    </>
  );
};

export default EditProfile;
