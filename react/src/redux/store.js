import {configureStore} from '@reduxjs/toolkit';
import introPageReducer from './introPage';
import registrationPageReducer from './registration';
import allFaultsReducer from './allFaults';

export default configureStore({
  reducer:{
    introPage: introPageReducer,
    registrationPage: registrationPageReducer,
    allFaults: allFaultsReducer,
  }
});