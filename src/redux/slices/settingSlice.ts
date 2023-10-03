import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';

type SettingState = {
  theme: 'dark' | 'light';
  notifications: [];
};

const initialState: SettingState = {
  theme: 'light',
  notifications: [],
};

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    resetSetting: state => {
      state = initialState;
    },
  },
});

export const { resetSetting } = settingSlice.actions;

export const resetSettingAsync = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(resetSetting());
  }, 1000);
};

export const getSetting = (state: RootState) => state.settings;

export default settingSlice.reducer;
