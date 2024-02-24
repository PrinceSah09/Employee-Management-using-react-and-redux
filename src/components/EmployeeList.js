import React, { useState } from "react"; // Import React and useState hook
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks from react-redux
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import { deleteEmployee } from "../redux/employeesSlice"; // Import deleteEmployee action creator from employeesSlice
import "./EmployeeList.css"; // Import CSS file for styling

const EmployeeList = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const employees = useSelector((state) => state.employees);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle deletion of an employee
  const handleDeleteEmployee = (id) => {
    dispatch(deleteEmployee(id));
    setSuccessMessage("Employee details deleted successfully");
    setTimeout(() => setSuccessMessage(""), 1500);
  };

  return (
    <div className="List_Class">
      <div className="heading_text">
        <h2>Employee List</h2>
      </div>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <br />
      <table className="scroll">
        <thead id="thead">
          <tr>
            <th>Full Name</th>
            <th>Department</th>
            <th>Experience (years)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.fullName}</td>
              <td>{employee.department}</td>
              <td>{employee.experience}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => navigate(`/edit/${employee.id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
