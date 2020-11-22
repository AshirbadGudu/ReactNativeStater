import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
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
import SearchInput, {createFilter} from 'react-native-search-filter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Topbar from '../components/Topbar';
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
      <View style={styles.searchWarper}>
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

      <List>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredPosts}
          renderItem={({item, index}) => (
            <ListItem thumbnail key={index}>
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
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </List>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWarper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
