import React from "react"; // Importing React library
import "./App.css"; // Importing CSS file for styling
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom for routing
import { Provider } from "react-redux"; // Importing Provider component from react-redux for Redux integration
import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore function from Redux Toolkit for creating the Redux store
import EmployeeList from "./components/EmployeeList"; // Importing EmployeeList component
import Home from "./components/Home"; // Importing Home component
import NewEmployee from "./components/NewEmployee"; // Importing NewEmployee component
import EditEmployee from "./components/EditEmployee"; // Importing EditEmployee component
import Navigation from "./components/Navigation"; // Importing Navigation component
import employeesReducer from "./redux/employeesSlice"; // Importing employeesReducer from employeesSlice

// Creating the Redux store with employeesReducer as the reducer
const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

// Main App component
const App = () => {
  return (
    // Providing the Redux store to all components in the app using Provider
    <Provider store={store}>
      {/* Setting up routing using BrowserRouter */}
      <Router>
        <>
          {/* Including Navigation component */}
          <Navigation />
          {/* Defining routes for different components */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Route for the Home component */}
            <Route path="/add" element={<NewEmployee />} />
            {/* Route for adding a new employee */}
            <Route path="/list" element={<EmployeeList />} />
            {/* Route for displaying the list of employees */}
            <Route path="/edit/:id" element={<EditEmployee />} />
            {/* Route for editing an employee */}
          </Routes>
        </>
      </Router>
    </Provider>
  );
};

export default App; // Exporting the App component
