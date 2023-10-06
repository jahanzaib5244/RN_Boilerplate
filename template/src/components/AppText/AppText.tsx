import {Text, TextProps} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface props extends TextProps {
  childre?: React.ReactNode;
}

const AppText: React.FC<props> = ({style, children, ...other}) => {
  return (
    <Text {...other} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
