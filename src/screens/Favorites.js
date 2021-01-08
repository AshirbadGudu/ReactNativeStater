import React from 'react';
import {ScrollView, View} from 'react-native';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {width} from '../config/Style';

const Favorites = () => {
  return (
    <>
      <Header title="Favorites" />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductCard cardStyle={{width: width - 30}} />
          <ProductCard cardStyle={{width: width - 30}} productImg={DISH_IMG} />
          <ProductCard cardStyle={{width: width - 30}} />
        </ScrollView>
      </View>
    </>
  );
};

export default Favorites;
