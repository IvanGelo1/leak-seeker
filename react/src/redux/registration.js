import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
  name: 'registrationPage',
  initialState: {
    value: ''
  },
  reducers: {
    changeRegistration: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;