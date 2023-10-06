import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './Auth/AuthNavigator';
import {useAppSelector} from '../utils/STORE';
import i18next from '../utils/i18next';

const RootNavigation = () => {
  const {language} = useAppSelector(state => state.persistedReducer);

  // useefect for validate last user selected language
  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
