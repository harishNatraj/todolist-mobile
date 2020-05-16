import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './../Screens/Home';
import DetailsPage from '../Components/DetailsPage';
import CreateTask from '../Components/CreateTask';
import {Image, View} from 'react-native';
import {s,vs} from 'react-native-size-matters';
import AddTask from '../Components/AddTask';
import HomeIcon from '../Components/Home';
import Settings from '../Components/Settings';
import Notification from '../Components/Notification';
import ProfileImg from '../Components/ProfileImg';
const Tab = createBottomTabNavigator();

const TabNavigation = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'rgba(239, 245, 248, 0.827983)',
          padding: s(5),
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: () => <Settings />,
        }}
      />
      <Tab.Screen
        name={' '}
        component={CreateTask}
        options={{
          tabBarIcon: () => <AddTask />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{
          tabBarIcon: () => <Notification />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: () => <ProfileImg />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
