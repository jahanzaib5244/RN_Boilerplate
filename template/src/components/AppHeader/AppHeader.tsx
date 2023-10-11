import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useColorScheme} from '../../utils/ColorScheme';
import AppText from '../AppText/AppText';
import {props} from './interface';

const AppHeader: React.FC<props> = ({
  title = '',
  showLeftButton = true,
  left,
  right,
}) => {
  const {colors} = useColorScheme();
  return (
    <View style={[styles.header, {backgroundColor: colors?.black}]}>
      {!!left ? (
        left
      ) : (
        <View style={[styles.header_container]}>
          {showLeftButton && (
            <Feather name="arrow-left" color={colors?.white} size={23} />
          )}
        </View>
      )}
      <View style={[styles.header_container, styles.align_Center]}>
        {
          <AppText style={[styles.header_text, {color: colors?.white}]}>
            {title}
          </AppText>
        }
      </View>
      <View style={[styles.header_container, styles.align_last]}>
        {!!right && right}
      </View>
    </View>
  );
};

export default AppHeader;
