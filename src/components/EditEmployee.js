import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks from react-redux
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams hooks from react-router-dom
import { updateEmployee } from "../redux/employeesSlice"; // Import updateEmployee action creator from employeesSlice
import "./EditEmployee.css"; // Import CSS file for styling

const EditEmployee = () => {
  // Retrieving the employee ID
  const { id } = useParams();

  // Initialize React hooks and Redux functions
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state) =>
    state.employees.find((emp) => emp.id === parseInt(id))
  );
  const [successMessage, setSuccessMessage] = useState("");

  // State hooks for form input values
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  // useEffect hook to update state when the 'employee' prop changes
  useEffect(() => {
    if (employee) {
      setFullName(employee.fullName);
      setBirthdate(employee.birthdate);
      setDepartment(employee.department);
      setExperience(employee.experience);
    }
  }, [employee]);

  // Handle updating the employee details
  const handleUpdateEmployee = () => {
    const updatedEmployee = {
      ...employee,
      fullName,
      birthdate,
      department,
      experience,
    };

    // Dispatch the updateEmployee action with the updated details
    dispatch(updateEmployee(updatedEmployee));

    // Display the success message and navigate to the employee list after 1 second
    setSuccessMessage("Employee updated successfully");
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/list");
    }, 1000);
  };

  // Handle canceling the edit and navigating back to the employee list
  const handleCancel = () => {
    navigate("/list");
  };

  // Render the edit employee form
  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>

      {/* Input fields for editing employee details */}
      <label>
        Full Name:
        <input
          className="edit-input"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Birthdate:
        <input
          className="edit-input"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Department:
        <input
          className="edit-input"
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </label>
      <br />
      <label>
        Experience:
        <input
          className="edit-input"
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)} // Update 'experience' state on input change
        />
      </label>
      <br />

      {/* Display success message if any */}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <br />

      {/* Buttons for updating employee  */}
      <button className="update-button" onClick={handleUpdateEmployee}>
        Update Employee
      </button>
      <button className="cancel-button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default EditEmployee;
