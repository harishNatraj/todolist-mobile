import React from 'react';
import {View, Image} from 'react-native';
import {s} from 'react-native-size-matters';
const AddTask = () => (
  <View
    style={{
      backgroundColor: 'transaparent',
      borderRadius: 58 / 2,
      transform: [
        {
          translateY: s(-20),
        },
      ],
    }}>
    <Image
      source={require(`../assets/images/addTask.png`)}
      style={{height: 78, width: 78}}
    />
  </View>
);

export default AddTask;
