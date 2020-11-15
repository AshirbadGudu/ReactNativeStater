import React from 'react';
import {Image, View, ScrollView, Linking} from 'react-native';
import {List, Paragraph, Subheading, Title} from 'react-native-paper';
import Topbar from '../components/Topbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../config/Colors';
import {ABOUT_APP} from '../config/Data';
const About = (props) => {
  return (
    <>
      <Topbar
        title={'About'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', alignItems: 'center', padding: 10}}>
          <Image
            source={require('../assets/icon.png')}
            style={{resizeMode: 'center', width: 100, height: 100}}
          />
          <Title>{ABOUT_APP.APP_NAME}</Title>
          <Subheading>Version {ABOUT_APP.VERSION}</Subheading>
          <Paragraph style={{textAlign: 'justify'}}>
            {ABOUT_APP.DESCRIPTION}
          </Paragraph>
        </View>
        <List.Subheader>Contact Us</List.Subheader>
        {ABOUT_APP.SOCIAL_LINKS.map((item, key) => (
          <List.Item
            key={key}
            title={item.name}
            description={item.url}
            left={() => (
              <FontAwesome
                style={{
                  color: item.color,
                  fontSize: 35,
                  marginVertical: 8,
                }}
                name={item.icon}
              />
            )}
            onPress={() => Linking.openURL(item.url)}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default About;
