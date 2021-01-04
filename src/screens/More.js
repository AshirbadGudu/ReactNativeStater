import React from 'react';
import {ScrollView, View} from 'react-native';
import {List} from 'react-native-paper';
import {Header} from '../components';
import {useAppContext} from '../config/AppContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
const More = (props) => {
  const {logout, handelExit} = useAppContext();

  async function handleLogout() {
    try {
      logout();
    } catch {
      alert('Failed to log out');
    }
  }

  return (
    <>
      <Header title="More" />
      <View style={{flex: 1, paddingVertical: 10}}>
        <ScrollView>
          <List.Item
            onPress={() => props.navigation.navigate('Settings')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Settings"
            left={(props) => (
              <Ionicons {...props} size={30} name="settings-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={() => props.navigation.navigate('Orders')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Orders"
            left={(props) => (
              <Ionicons {...props} size={30} name="document-text-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Payment Methods"
            left={(props) => (
              <Ionicons {...props} size={30} name="card-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Privacy Policy"
            left={(props) => (
              <Ionicons {...props} size={30} name="shield-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Terms & Conditions"
            left={(props) => (
              <Ionicons {...props} size={30} name="shield-checkmark-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Help Center"
            left={(props) => (
              <Ionicons {...props} size={30} name="help-circle-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={handleLogout}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Log Out"
            left={(props) => (
              <Ionicons {...props} size={30} name="log-out-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={handelExit}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Exit App"
            left={(props) => (
              <Ionicons {...props} size={30} name="close-circle-outline" />
            )}
            right={(props) => (
              <Ionicons {...props} size={24} name="chevron-forward-outline" />
            )}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default More;
