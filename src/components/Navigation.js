import React from "react"; // Import React library
import "./Navigation.css"; // Import Navigation CSS styles
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

// Navigation component
const Navigation = () => {
  return (
    <div className="navigation-container">
      {" "}
      {/* Navigation container */}
      <div className="header">
        <Link to="/" id="header_link">
          Employee Management System
        </Link>
      </div>
      <div className="nav-links">
        {" "}
        {/* Navigation links */}
        <Link to="/add" id="Nav_Link_Btn">
          {" "}
          {/* Link to add employee page */}
          Add Employee
        </Link>{" "}
        <Link to="/list" id="Nav_Link_Btn">
          View Employee
        </Link>{" "}
      </div>
    </div>
  );
};

export default Navigation; // Export Navigation component
