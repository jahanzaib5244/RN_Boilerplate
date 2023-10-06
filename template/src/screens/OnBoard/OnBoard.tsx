import {View, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {paramsList} from '../../utils/NavigationInterface';
import i18next from '../../utils/i18next';
import {useTranslation} from 'react-i18next';

const OnBoard = () => {
  const navigation = useNavigation<NavigationProp<paramsList>>();
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);

  const changeLan = () => {
    i18next.changeLanguage('fr');
    setVisible(false);
  };
  return (
    <View>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <AppButton title={t('welcome')} onPress={() => changeLan()} />
      </Modal>
      <AppButton title={t('greeting')} onPress={() => changeLan()} />
    </View>
  );
};

export default OnBoard;
