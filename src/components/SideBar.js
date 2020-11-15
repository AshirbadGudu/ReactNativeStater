import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert, BackHandler, Share, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';

const SideBar = (props) => {
  const handelShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Stater | A Stater Template for building react native apps.',
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handelExit = () => {
    Alert.alert(
      'Exit App',
      'Are You Sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: true},
    );
  };
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 25,
              paddingLeft: 10,
            }}>
            <Avatar.Image source={require('../assets/icon.png')} size={50} />
            <View style={{marginLeft: 15}}>
              <Title>Ashirbad Panigrahi.</Title>
              <Caption>+91 7008614546</Caption>
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('HomeTab')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Search"
              icon={({color, size}) => (
                <Icon name="search-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('SearchTab')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Profile"
              icon={({color, size}) => (
                <Icon name="person-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('ProfileTab')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="About"
              icon={({color, size}) => (
                <Icon
                  name="information-circle-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('About')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Feedback"
              icon={({color, size}) => (
                <Icon
                  name="chatbox-ellipses-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('Feedback')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Support"
              icon={({color, size}) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Support')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Share"
              icon={({color, size}) => (
                <Icon name="share-social-outline" color={color} size={size} />
              )}
              onPress={handelShare}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Exit App"
              icon={({color, size}) => (
                <Icon name="close-outline" color={color} size={size} />
              )}
              onPress={handelExit}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Sign Out"
              icon={({color, size}) => (
                <Icon name="log-out-outline" color={color} size={size} />
              )}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
      </View>
    </>
  );
};

export default SideBar;
