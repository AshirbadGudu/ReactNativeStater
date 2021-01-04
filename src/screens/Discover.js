import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, Button} from 'react-native-paper';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {PT_COLORS} from '../config';

const Discover = (props) => {
  return (
    <>
      <Header title="Discover" />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Title>Near by</Title>
            <Button
              onPress={() =>
                props.navigation.push('CategoryDetails', 'Near By')
              }
              color={PT_COLORS.primaryBlack}>
              {'More >'}
            </Button>
          </View>
          <ProductCard />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Title>Meals</Title>
            <Button
              onPress={() => props.navigation.push('CategoryDetails', 'Meals')}
              color={PT_COLORS.primaryBlack}>
              {'More >'}
            </Button>
          </View>
          <ProductCard productImg={DISH_IMG} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Title>Collect For Diner</Title>
            <Button
              onPress={() =>
                props.navigation.push('CategoryDetails', 'Collect For Diner')
              }
              color={PT_COLORS.primaryBlack}>
              {'More >'}
            </Button>
          </View>
          <ProductCard />
        </ScrollView>
      </View>
    </>
  );
};

export default Discover;
