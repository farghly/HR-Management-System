import React from "react";
import { Link } from "react-router-dom";

const DepartmentsDetails = () => {
  return (
    <>
      <Link to={"/department"} class="btn btn-primary mb-3">
        Back to Department List
      </Link>
      <h3 class="p-3 ps-4">Department Details</h3>
      <div class="department-details-card p-3 d-flex gap-3 flex-column">
        <h2 class="department-name">
          Department Name: <span>Web</span>
        </h2>
        <div class="department-created-at">
          Created at:{" "}
          <span class="department-created-at-details">1/11/2022</span>
        </div>
        <div class="department-employee">
          Department Employees: <span class="department-employee-num">11</span>
        </div>
        <div class="department-btns gap-2 d-flex">
          <div class="delete-department btn btn-danger">Delete</div>
          <div class="update-department btn btn-success">Update</div>
        </div>
      </div>
      <div class="tab tab-details-dep table-scrl">
        <table class="table department-details-table">
          <thead>
            <tr>
              <th scope="col">Employee Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="employee-name">Mo</td>
              <td>
                <button class="delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DepartmentsDetails;
