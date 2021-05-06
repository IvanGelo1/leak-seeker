import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VehicleFaults {
  reg: string,
  make: string,
  model: string,
  faults: Fault[]
}

interface Fault {
  summary: string,
  description: string,
  priceToFix: number,
  rating: number,
  area: string,
  year: number,
  faultLogged: string
}

interface FaultsState {
  value: VehicleFaults
}

const initialVehicleFaults: VehicleFaults = {
  reg: '',
  make: '',
  model: '',
  faults: []
}

const initialState: FaultsState = { value: initialVehicleFaults }

export const allFaultsSlice = createSlice(
  {
    name: 'allFaults',
    initialState,
    reducers: {
      setFaults: (state, action: PayloadAction<VehicleFaults>) => {
        state.value = action.payload
      }
    }
  }
)

export const {setFaults} = allFaultsSlice.actions;

export default allFaultsSlice.reducer;