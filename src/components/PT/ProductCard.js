import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {HEART_IMG, LOGO, WELCOME_IMG} from '../../assets';

const ProductCard = ({productImg}) => {
  return (
    <TouchableOpacity
      style={{
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 5,
      }}>
      <ImageBackground source={productImg || WELCOME_IMG} style={styles.image}>
        <View
          style={{width: '100%', height: 300, backgroundColor: '#000000a0'}}>
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
              marginTop: 60,
              flexDirection: 'row',
            }}>
            <Image
              source={LOGO}
              style={{width: 60, height: 60, borderRadius: 40}}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: '50%',
              backgroundColor: '#ddd',
              padding: 5,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: '#333',
                padding: 8,
                borderRadius: 20,
                position: 'absolute',
                top: -10,
                left: 14,
              }}>
              <Image
                source={HEART_IMG}
                style={{
                  width: 15,
                  height: 15,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{paddingTop: 24, paddingLeft: 10}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginBottom: 12,
                }}>
                Steak House-Khalidya
              </Text>
              <Text style={{color: '#000'}}>What you could Get</Text>
              <View
                style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: 'red',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: 'green',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: 'blue',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: 'brown',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
              </View>
              <Text style={{color: '#888', fontSize: 12, marginTop: 14}}>
                Collect directly-250m
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'center',
  },
});
