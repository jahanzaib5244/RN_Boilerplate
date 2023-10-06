import {View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {paramsList} from '../../utils/NavigationInterface';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../redux/PersistedReducer/actions';

const OnBoard = () => {
  const navigation = useNavigation<NavigationProp<paramsList>>();
  const {t} = useTranslation();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const changeLan = () => {
    dispatch(changeLanguage('fr'));
  };
  return (
    <View>
      <AppInput
        label={'Email'}
        value={value}
        onChangeText={e => setValue(e)}
        error={'hello'}
      />
      <AppButton title={t('greeting')} onPress={() => changeLan()} />
    </View>
  );
};

export default OnBoard;
