import React from 'react';
import {View, Image} from 'react-native';
const Notification = () => (
  <View>
    <Image
      source={require(`../assets/images/notification.png`)}
      style={{height: 28, width: 28}}
    />
  </View>
);

export default Notification;
