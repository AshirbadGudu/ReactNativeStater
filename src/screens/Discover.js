import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, Button, Appbar} from 'react-native-paper';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {PT_COLORS} from '../config';

const Discover = (props) => {
  return (
    <>
      <Header title="Khalidya, Abu Dhabi" />
      {/* <Appbar
  >
        <Appbar.Content title="Khalidya, Abu Dhabi" subtitle={'With in 3km'} />
      </Appbar> */}
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <Title>Near by</Title>
            <Button
              labelStyle={{fontSize: 12}}
              onPress={() =>
                props.navigation.push('CategoryDetails', 'Near By')
              }
              color={PT_COLORS.primaryBlack}>
              {'More >'}
            </Button>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard corner />
            <ProductCard corner />
            <ProductCard corner />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <Title>Meals</Title>
            <Button
              labelStyle={{fontSize: 12}}
              onPress={() => props.navigation.push('CategoryDetails', 'Meals')}
              color={PT_COLORS.primaryBlack}>
              {'More >'}
            </Button>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard corner productImg={DISH_IMG} />
            <ProductCard corner productImg={DISH_IMG} />
            <ProductCard corner productImg={DISH_IMG} />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <Title>Collect For Diner</Title>
            <Button
              labelStyle={{fontSize: 12}}
              onPress={() =>
                props.navigation.push('CategoryDetails', 'Collect For Diner')
              }
              color={PT_COLORS.primaryBlack}>
              {'More >'}
            </Button>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductCard corner />
            <ProductCard corner />
            <ProductCard corner />
          </ScrollView>
        </ScrollView>
      </View>
    </>
  );
};

export default Discover;
