import React from "react";
import { Link } from "react-router-dom";

const EmployeeDetails = () => {
  return (
    <>
      <Link to="/employees" class="btn btn-primary mb-3 employee-list">
        Back to Employee List
      </Link>
      <h3>Employee Details</h3>
      <div class="employee-content-details p-3 d-flex gap-3 flex-column">
        <h2 class="employee-name">
          {" "}
          <span class="employee-name-details">Final Project</span>
        </h2>
        <div class="date-of-joining">
          Date of Joining:{" "}
          <span class="date-of-joining-details">30/7/2022</span>
        </div>
        <div class="employee-department">
          Employee Department:{" "}
          <span class="employee-department-details">Frontend</span>
        </div>
        <div class="employee-project">
          Employee Project:{" "}
          <span class="employee-project-details">Movie App</span>
        </div>
        <div class="employee-task">
          Employee Task: <span class="employee-task-details">Movie App</span>
        </div>
        <div class="employee-btns gap-2 d-flex">
          <div class="delete-employee btn btn-danger">Delete</div>
          <div class="update-employee btn btn-success">Update</div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
