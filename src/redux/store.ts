import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import settingSlice from './slices/settingSlice';
import userSlice from './slices/userSlice';

const additionalMiddleware = [];

const rootReducer = combineReducers({
  settings: settingSlice,
  user: userSlice,
});

const persistConfig: PersistConfig<any> = {
  key: 'redux-persist',
  storage: AsyncStorage,
  whitelist: ['setting'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [] as const,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
