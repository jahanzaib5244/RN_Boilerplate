import {View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {Routes} from 'src/utils/Routes';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {changeLanguage} from 'src/redux/PersistedReducer/actions';
import {useColorScheme} from 'src/utils/ColorScheme';
import ThemeButton from 'src/components/ThemeButton/ThemeButton';

const OnBoard = () => {
  const {colors} = useColorScheme();

  return (
    <View style={{flex: 1, backgroundColor: colors?.black}}>
      <AppHeader title="Home" showLeftButton={false} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ThemeButton />
      </View>
    </View>
  );
};

export default OnBoard;
