import {View, Text} from 'react-native';
import React from 'react';
import {AppHeader} from '../../components';
import {translate} from 'src/utils';

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
        <Text>{translate('greeting')}</Text>
      </View>
    </View>
  );
};

export default OnBoard;
