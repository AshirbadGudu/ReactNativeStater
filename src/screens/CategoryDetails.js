import React from 'react';
import {ScrollView, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';

const CategoryDetails = (props) => {
  const categoryName = props.route.params;
  return (
    <>
      <Header
        title={categoryName}
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
      />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductCard productImg={DISH_IMG} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ScrollView>
      </View>
    </>
  );
};

export default CategoryDetails;
