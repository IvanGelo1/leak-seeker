import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  value: string
}

const initialState: RegistrationState = { value: '' }

export const registrationSlice = createSlice({
  name: 'registrationPage',
  initialState,
  reducers: {
    changeRegistration: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { changeRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;