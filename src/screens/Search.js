import {
  Left,
  ListItem,
  List,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  View,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Topbar from '../components/Topbar';
import SearchInput, {createFilter} from 'react-native-search-filter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
const Search = (props) => {
  const [posts, setPosts] = useState([]);
  const [searchTex, setSearchTex] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((value) => {
        value.json().then((data) => setPosts(data));
      })
      .catch((e) => console.log(e));
  }, []);
  const filteredPosts = posts.filter(createFilter(searchTex, ['title']));

  return (
    <>
      <Topbar
        title={'Search'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
        }}>
        <Ionicons.Button
          backgroundColor="transparent"
          name="search"
          color="#333"
          size={24}
        />
        <View style={{width: '100%'}}>
          <SearchInput
            onChangeText={(txt) => setSearchTex(txt)}
            placeholder="Search Post Here.."
          />
        </View>
      </View>

      <ScrollView>
        <List>
          {filteredPosts.map((item, key) => (
            <ListItem thumbnail key={key}>
              <Left>
                <Thumbnail square source={{uri: item.thumbnailUrl}} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </>
  );
};

export default Search;
