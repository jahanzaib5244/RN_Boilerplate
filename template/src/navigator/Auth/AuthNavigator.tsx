import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Signup from '../../screens/Signup/Signup';
import OnBoard from '../../screens/OnBoard/OnBoard';

const Stack = createStackNavigator();
interface screenOption {
  name: string;
  component: React.FC;
  options?: StackNavigationOptions;
}

const screens: Array<screenOption> = [
  {
    name: 'OnBoard',
    component: OnBoard,
  },
  {
    name: 'Signup',
    component: Signup,
  },
  {
    name: 'Login',
    component: Login,
  },
];
const AuthNavigator = () => {
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

export default AuthNavigator;
