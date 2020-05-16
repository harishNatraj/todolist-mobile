import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './../Screens/Home';
import DetailsPage from '../Components/DetailsPage';
import CreateTask from '../Components/CreateTask';

const Tab = createBottomTabNavigator();

const TabNavigation = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'rgba(239, 245, 248, 0.827983)',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
      <Tab.Screen name="Add" component={CreateTask} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
