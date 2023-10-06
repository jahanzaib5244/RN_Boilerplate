import {Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {props} from './interface';
import {COLORS} from '../../constants';
import AppText from '../AppText/AppText';

const AppButton: React.FC<props> = ({
  title = '',
  onPress = () => {},
  style = {},
  titleStyle = {},
  loading = false,
  activityColor = COLORS.white,
}) => {
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      style={[styles.button, style]}>
      {loading ? (
        <ActivityIndicator size={30} color={activityColor} />
      ) : (
        <AppText style={[styles.button_text, titleStyle]}>{title}</AppText>
      )}
    </Pressable>
  );
};

export default AppButton;
