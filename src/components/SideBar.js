import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert, BackHandler, Share, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {useAppContext} from '../config/AppContext';

const SideBar = (props) => {
  const {handelExit, handelShare, logout} = useAppContext();
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
              onPress={() => handelShare()}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Exit App"
              icon={({color, size}) => (
                <Icon name="close-outline" color={color} size={size} />
              )}
              onPress={() => handelExit()}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Sign Out"
              onPress={() => logout()}
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
