import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login/Login';
import Signup from '../../screens/Signup/Signup';
import OnBoard from '../../screens/OnBoard/OnBoard';

const Stack = createStackNavigator();

const screens = [
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
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
