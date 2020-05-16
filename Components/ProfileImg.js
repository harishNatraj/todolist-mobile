import React from 'react';
import {View, Image} from 'react-native';
const ProfileImg = () => (
  <View>
    <Image
      source={require(`../assets/images/user.png`)}
      style={{height: 28, width: 28}}
    />
  </View>
);

export default ProfileImg;
