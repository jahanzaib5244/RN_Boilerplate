import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../components';

const OnBoard = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppHeader title="Home" showLeftButton={false} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Hello world</Text>
      </View>
    </View>
  );
};

export default OnBoard;
