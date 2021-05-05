import { createSlice } from '@reduxjs/toolkit';

export const allFaultsSlice = createSlice(
  {
    name: 'allFaults',
    initialState: {
      value: [],
    },
    reducers: {
      setFaults: (state, action) => {
        state.value = [action.payload]
      }
    }
  }
)

export const {setFaults} = allFaultsSlice.actions;

export default allFaultsSlice.reducer;