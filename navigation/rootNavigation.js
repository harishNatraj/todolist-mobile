import React, {useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './tabNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [isLoggedIn, setloginUser] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            component={() => (
              <Button title="Login user" onPress={() => setloginUser(true)} />
            )}
          />
        ) : (
          <Stack.Screen name="Home" component={TabNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
