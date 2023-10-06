import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const screens = [
  {
    name: 'TabHome',
    component: TabNavigator,
  },
];

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      {screens.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
