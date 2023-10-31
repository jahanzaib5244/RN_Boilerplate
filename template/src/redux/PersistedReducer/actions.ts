import {createAction} from '@reduxjs/toolkit';

export const changeLanguage = createAction('ChangeLanguage', lng => {
  return {payload: lng};
});

export const changeTheme = createAction(
  'changeTheme',
  (theme: 'dark' | 'light') => {
    return {payload: theme};
  },
);
