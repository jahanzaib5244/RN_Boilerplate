import {createSlice} from '@reduxjs/toolkit';
import {initialStates} from './interface';
import {changeLanguage, changeTheme} from './actions';

const initialState: initialStates = {
  theme: 'light',
  language: 'en',
};

export const PersistedReducer = createSlice({
  name: 'persisted',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeLanguage, (state, {payload}) => {
        console.log('language Change');
        state.language = payload;
      })
      .addCase(changeTheme, (state, {payload}) => {
        state.theme = payload;
      });
  },
});

export default PersistedReducer.reducer;
