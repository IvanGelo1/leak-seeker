import {configureStore} from '@reduxjs/toolkit';
import introPageReducer from './introPage';
import registrationPageReducer from './registration';
import allFaultsReducer from './allFaults';

const store=  configureStore({
  reducer:{
    introPage: introPageReducer,
    registrationPage: registrationPageReducer,
    allFaults: allFaultsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>

export default store