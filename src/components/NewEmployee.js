// src/components/AddEmployee.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice";
import "./AddEmployee.css";

const NewEmployee = () => {
  // Redux hooks for dispatching actions
  const dispatch = useDispatch();

  // State hooks for form input values and success message
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle adding a new employee
  const handleAddEmployee = async () => {
    // Validate name to contain only letters and single spaces
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    if (!nameRegex.test(fullName)) {
      alert(
        "Please enter a valid name containing only letters and a single space between words."
      );
      return;
    } else if (birthdate === "") {
      alert("Enter birthday!");
      return;
    } else if (department === "") {
      alert("Enter Department!!");
      return;
    } else if (experience < 0 || experience === "") {
      alert("Enter valid exprience!");
      return;
    }

    const newEmployee = {
      id: new Date().getTime(),
      fullName,
      birthdate,
      department,
      experience,
    };

    dispatch(addEmployee(newEmployee)); //Define dispatch

    setFullName("");
    setBirthdate("");
    setDepartment("");
    setExperience("");

    setSuccessMessage("Employee added successfully");
    setTimeout(() => setSuccessMessage(""), 1500);
  };

  return (
    <div className="add-employee-container">
      <h2 className="add-employee-title">Add Employee Details</h2>

      <label className="add-label">
        Full Name:
        <input
          type="text"
          className="add-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          pattern="[a-zA-Z\s]+"
          title="Please enter a valid input."
        />
      </label>
      <label className="add-label">
        Birthdate:
        <input
          type="date"
          className="add-input"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <label className="add-label">
        Department:
        <input
          type="text"
          className="add-input"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </label>
      <label className="add-label">
        Experience (years):
        <input
          type="number"
          className="add-input"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </label>
      <br />

      {successMessage && (
        <div className="success-message1">{successMessage}</div>
      )}

      {/* Button for adding new employee */}
      <button className="add-button" onClick={handleAddEmployee}>
        Add Employee
      </button>
    </div>
  );
};
export default NewEmployee;
