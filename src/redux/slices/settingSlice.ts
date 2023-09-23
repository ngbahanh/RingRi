import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    resetSetting: state => {
      state = {};
    },
  },
});

export const { resetSetting } = settingSlice.actions;

export const resetSettingAsync = setting => dispatch => {
  setTimeout(() => {
    dispatch(resetSetting(setting));
  }, 1000);
};

export const getSetting = state => state.setting;

export default settingSlice.reducer;
