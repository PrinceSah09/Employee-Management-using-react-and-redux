// src/components/EmployeeListItem.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/employeeSlice"; // Correct import path

const EmployeeListItem = ({ employee }) => {
  const dispatch = useDispatch();

  // Function to handle the deletion of an employee
  const handleDelete = () => {
    // Dispatch the deleteEmployee action with the employee id
    dispatch(deleteEmployee(employee.id));
  };

  return (
    <li>
      {/* Displaying employee details */}
      {employee.fullName} - {employee.department} - {employee.experience} years
      {/* Link to the edit page for the specific employee */}
      <Link to={`/edit/${employee.id}`}>Edit</Link>
      {/* Button for deleting the employee */}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default EmployeeListItem;
