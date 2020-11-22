import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Image} from 'react-native';
import {List, Button} from 'react-native-paper';
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

      <List.Section style={{marginBottom: 100}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredPosts}
          renderItem={({item, index}) => (
            <List.Item
              key={index}
              left={(props) => (
                <Image
                  source={{uri: item.thumbnailUrl}}
                  style={{resizeMode: 'center', width: 50, height: 50}}
                />
              )}
              title={item.title}
              right={(props) => <Button onPress={() => {}}>View</Button>}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </List.Section>
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
