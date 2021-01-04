import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header, SettingTabsContainer} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {List, Switch} from 'react-native-paper';

const Settings = (props) => {
  const [isAppSwitchOn, setIsAppSwitchOn] = React.useState(false);
  const [isEmailSwitchOn, setIsEmailSwitchOn] = React.useState(false);

  return (
    <>
      <Header
        title="Settings"
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
      />
      <View style={{flex: 1, padding: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SettingTabsContainer title="Settings">
            <List.Item
              onPress={() => props.navigation.navigate('EditProfile')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Edit Profile"
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              onPress={() => props.navigation.navigate('ChangePassword')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Change Password"
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
          </SettingTabsContainer>
          <SettingTabsContainer
            title="Notifications"
            icon={
              <Ionicons
                style={{marginHorizontal: 10}}
                color="#333"
                size={30}
                name="notifications-outline"
              />
            }>
            <List.Item
              onPress={() => setIsAppSwitchOn(!isAppSwitchOn)}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="App Notifications"
              right={() => (
                <Switch
                  value={isAppSwitchOn}
                  onValueChange={() => setIsAppSwitchOn(!isAppSwitchOn)}
                />
              )}
            />
            <List.Item
              onPress={() => setIsEmailSwitchOn(!isEmailSwitchOn)}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Email Newsletter"
              right={() => (
                <Switch
                  value={isEmailSwitchOn}
                  onValueChange={() => setIsEmailSwitchOn(!isEmailSwitchOn)}
                />
              )}
            />
          </SettingTabsContainer>
          <SettingTabsContainer
            title="More"
            icon={
              <Ionicons
                style={{marginHorizontal: 10}}
                color="#333"
                size={30}
                name="add-circle-outline"
              />
            }>
            <List.Item
              onPress={() => props.navigation.navigate('Language')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Language"
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              onPress={() => props.navigation.navigate('Country')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Country"
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
          </SettingTabsContainer>
        </ScrollView>
      </View>
    </>
  );
};

export default Settings;
