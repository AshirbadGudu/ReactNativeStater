import React from 'react';
import {List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header, SettingTabsContainer} from '../components';

const Country = (props) => {
  return (
    <>
      <Header
        title="Country"
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
        title="Choose Country"
        icon={
          <Ionicons
            style={{marginHorizontal: 10}}
            color="#333"
            size={30}
            name="flag-outline"
          />
        }>
        <List.Item
          onPress={() => {}}
          style={{
            backgroundColor: '#fff',
            marginVertical: 1,
            paddingVertical: 15,
          }}
          title="United Arab Emirates"
          right={(props) => (
            <Ionicons {...props} size={24} name="chevron-forward-outline" />
          )}
        />
      </SettingTabsContainer>
    </>
  );
};

export default Country;
