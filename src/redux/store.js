// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import employeesReducer from './employeesSlice'; // Import the employees reducer

// Configure the Redux store with the employees reducer
const store = configureStore({
  reducer: {
    employees: employeesReducer, // Assign the employees reducer to the 'employees' key in the state
  },
});

// Export the configured store
export default store;
