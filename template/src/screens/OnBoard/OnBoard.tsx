import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppInput, TimePicker} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {paramsList} from '../../utils/NavigationInterface';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../redux/PersistedReducer/actions';
import {RunToast, showAlert} from '../../helper';

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
      <AppButton
        title={'show Toast Message'}
        onPress={() =>
          RunToast({
            title: 'hello',
            subTitle: 'hello this is subtitle',
          })
        }
      />
      <TimePicker visible={false} />
      <AppButton
        title={'show Alert'}
        onPress={() => showAlert({title: 'alert', message: 'message'})}
      />
    </View>
  );
};

export default OnBoard;
