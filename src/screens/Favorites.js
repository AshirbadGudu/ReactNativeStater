import React from 'react';
import {ScrollView, View} from 'react-native';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';

const Favorites = () => {
  return (
    <>
      <Header title="Favorites" />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductCard />
          <ProductCard productImg={DISH_IMG} />
          <ProductCard />
        </ScrollView>
      </View>
    </>
  );
};

export default Favorites;
