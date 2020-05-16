import React from 'react';
import {Button} from 'react-native';

const Login = props => {
  return (
    <Button
      title="Login user"
      onPress={() => props.navigation.navigate('Home')}
    />
  );
};

export default Login;
