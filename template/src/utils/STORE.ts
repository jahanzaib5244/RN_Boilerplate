import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'loggedInUsers', // The key under which the data will be stored in AsyncStorage
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, {});

const reducer = combineReducers({});

export const STORE = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const presistStore = persistStore(STORE);

export type RootState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type Dispatch = ThunkDispatch<{}, {}, AnyAction>;
export type Dispatch_RootState = ThunkDispatch<RootState, {}, AnyAction>;
