import { createSlice } from '@reduxjs/toolkit';

interface IntroState {
  value: boolean
}

const initialState: IntroState = { value: true }

export const introPageSlice = createSlice({
  name: 'introPage',
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    }
  }
})

export const {change} = introPageSlice.actions;

export default introPageSlice.reducer;
