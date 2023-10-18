import {Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {props} from './interface';
import {COLORS} from '../../constants';
import AppText from '../AppText/AppText';
import {useColorScheme} from 'src/utils/ColorScheme';

const AppButton: React.FC<props> = ({
  title = '',
  onPress = () => {},
  style = {},
  titleStyle = {},
  loading = false,
  activityColor = COLORS.white,
}) => {
  const {colors} = useColorScheme();
  return (
    <Pressable
      disabled={loading}
      testID="button.presaable"
      onPress={onPress}
      style={[styles.button, style]}>
      {loading ? (
        <ActivityIndicator
          testID="activity.indicator"
          size={30}
          color={activityColor}
        />
      ) : (
        <AppText style={[styles.button_text, titleStyle]}>{title}</AppText>
      )}
    </Pressable>
  );
};

export default AppButton;
