import React from 'react';
import {List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, SettingTabsContainer} from '../components';

const Language = (props) => {
  return (
    <>
      <Header
        title="Language"
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
      />
      <SettingTabsContainer
        title="Choose Language"
        icon={
          <Ionicons
            style={{marginHorizontal: 10}}
            color="#333"
            size={30}
            name="language-outline"
          />
        }>
        <List.Item
          onPress={() => {}}
          style={{
            backgroundColor: '#fff',
            marginVertical: 1,
            paddingVertical: 15,
          }}
          title="English"
          right={(props) => (
            <Ionicons {...props} size={24} name="chevron-forward-outline" />
          )}
        />
        <List.Item
          onPress={() => {}}
          style={{
            backgroundColor: '#fff',
            marginVertical: 1,
            paddingVertical: 15,
          }}
          title="Arabic"
          right={(props) => (
            <Ionicons {...props} size={24} name="chevron-forward-outline" />
          )}
        />
      </SettingTabsContainer>
    </>
  );
};

export default Language;
