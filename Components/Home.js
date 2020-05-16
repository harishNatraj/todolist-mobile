import React from 'react';
import {View, Image} from 'react-native';
const HomeIcon = () => (
  <View>
    <Image
      source={require(`../assets/images/home.png`)}
      style={{height: 28, width: 28}}
    />
  </View>
);

export default HomeIcon;
