import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppHeader, AppInput, TimePicker} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {Routes} from '../../utils/Routes';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {
  changeLanguage,
  changeTheme,
} from '../../redux/PersistedReducer/actions';
import {RunToast, showAlert} from '../../helper';
import {useColorScheme} from '../../utils/ColorScheme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ThemeButton from '../../components/ThemeButton/ThemeButton';

const OnBoard = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const {toggle, colorScheme, colors} = useColorScheme();
  const {t} = useTranslation();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const changeLan = () => {
    dispatch(changeLanguage('fr'));
  };
  return (
    <View style={{flex: 1, backgroundColor: colors?.black}}>
      <AppHeader title="Home" showLeftButton={false} />
      {/* <AppButton title={t('greeting')} onPress={() => changeLan()} />
      <AppButton
        title={'show Toast Message'}
        onPress={() =>
          RunToast({
            title: 'hello',
            subTitle: 'hello this is subtitle',
          })
        }
      /> */}
      {/* <TimePicker visible={true} /> */}
      {/* <AppButton
        title={'show Alert'}
        onPress={() => showAlert({title: 'alert', message: 'message'})}
      /> */}
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
