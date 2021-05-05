import { createSlice } from '@reduxjs/toolkit';

export const introPageSlice = createSlice({
  name: 'introPage',
  initialState: {
    value: true,
  },
  reducers: {
    change: (state) => {
      state.value = !state.value
    }
  }
})

export const {change} = introPageSlice.actions;

export default introPageSlice.reducer;
