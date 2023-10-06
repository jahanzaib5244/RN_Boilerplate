import {View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

import {props} from './interface';
import {styles} from './styles';
import AppText from '../AppText/AppText';

const AppInput: React.FC<props> = ({
  label = '',
  style = {},
  value = '',
  error = '',
  secureTextEntry = false,
  inputStyle = {},
  errorStyle = {},
  onChangeText = (e: string) => {},
  ...other
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...other}
        secureTextEntry={secureTextEntry}
        label="Email"
        style={inputStyle}
        value={value}
        onChangeText={e => onChangeText(e)}
        error={!!error}
      />
      {error && <AppText style={[styles.error, errorStyle]}>{error}</AppText>}
    </View>
  );
};

export default AppInput;
