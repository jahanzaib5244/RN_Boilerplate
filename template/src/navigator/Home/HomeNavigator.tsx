import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

interface screenOption {
  name: string;
  component: React.FC;
  options?: StackNavigationOptions;
}

const screens: Array<screenOption> = [
  {
    name: 'TabHome',
    component: TabNavigator,
  },
];

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      {screens.map((item, index) => (
        <Stack.Screen
          key={index}
          options={item?.options ?? {}}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
