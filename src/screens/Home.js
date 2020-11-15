import React from 'react';

import MyCarousel from '../components/MyCarousel';
import Topbar from '../components/Topbar';

const data = [
  {
    id: 1,
    uri: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    id: 2,
    uri: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 3,
    uri: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    id: 4,
    uri: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    id: 5,
    uri: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    id: 6,
    uri:
      'https://images.pexels.com/photos/33248/tablets-cocktail-cocktail-tablets-drugs.jpg',
  },
];

const Home = (props) => {
  return (
    <>
      <Topbar
        title={'Home'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <MyCarousel data={data} />
    </>
  );
};

export default Home;
