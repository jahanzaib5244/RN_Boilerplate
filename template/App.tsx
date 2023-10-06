import {View} from 'react-native';
import React, {useState} from 'react';
import Home from './src/screens/Home/Home';
import Rating from './src/screens/Rating/Rating';
import Chat from './src/screens/chat/Chat';
import DatePicker from 'calendar-date-picker-react-native';
import RootNavigation from './src/navigator/RootNavigation';

const App = () => {
  return <RootNavigation />;
};

export default App;
