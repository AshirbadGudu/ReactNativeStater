import React from 'react';
import {ScrollView, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
const Tab = createMaterialTopTabNavigator();

const Browse = () => {
  return (
    <>
      <Header title="Browse" />
      <Tab.Navigator>
        <Tab.Screen
          name="Packs"
          component={ProductCards}
          options={{title: 'Packs'}}
        />
        <Tab.Screen
          name="Stores"
          component={ProductCards}
          options={{title: 'Stores'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Browse;

function ProductCards() {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductCard />
        <ProductCard productImg={DISH_IMG} />
        <ProductCard />
      </ScrollView>
    </View>
  );
}
