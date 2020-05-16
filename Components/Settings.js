import React from 'react';
import {View, Image} from 'react-native';
const Settings = () => (
  <View>
    <Image
      source={require(`../assets/images/settings.png`)}
      style={{height: 28, width: 28}}
    />
  </View>
);

export default Settings;