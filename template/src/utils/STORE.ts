import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import Mmkv from './storage';
import PersistedReducer from '../redux/PersistedReducer';

const persistConfig = {
  key: 'PersistedReducer', // The key under which the data will be stored in AsyncStorage
  storage: new Mmkv(),
};

const persistedReducer = persistReducer(persistConfig, PersistedReducer);

const reducer = combineReducers({
  persistedReducer,
});

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
