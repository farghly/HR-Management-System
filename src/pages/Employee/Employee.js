// import { connect } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchEmployees } from "./../../redux";
import { getEmployees } from "../../api/employeeAPI";

import "./styles.css";
import { Link } from "react-router-dom";
// import { getEmployees } from "./../../api/index";
// import { response } from "express";
import { useNavigate } from "react-router-dom";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getEmployees().then((response) => {
      setEmployees(response.data.data.data);
    });
  }, []);

  const navigateToEditEmployee = (event) => {
    // console.log(event.currentTarget.id);

    navigate(`/employees/editEmployee/${event.currentTarget.id}`);
  };

  return (
    <>
      <Link
        to="/employees/addemployee"
        class="btn btn-primary mb-3 employee-list"
      >
        Add Employee
      </Link>
      <h3 class="p-3 ps-4">Employee List</h3>
      <div class="ser d-flex gap-2">
        <h4>Search:</h4>
        <input type="search" />
      </div>
      <div class="tab p-3">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Employee Name</th>
              <th scope="col">PIN</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">User Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                <>
                  <tr>
                    <td class="employee-name">{`${employee.firstName} ${employee.lastName} `}</td>
                    <td class="employee-pin">911</td>
                    <td class="employee-email">{employee.email}</td>
                    <td class="employee-contact">{`${employee.contactNumber[0]} `}</td>
                    <td class="employee-type">{employee.role}</td>
                    <td>
                      <button
                        class="edit"
                        id={employee._id}
                        onClick={navigateToEditEmployee}
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            {/* <tr>
              <td class="employee-name">Mo</td>
              <td class="employee-pin">911</td>
              <td class="employee-email">mo911@mo.com</td>
              <td class="employee-contact">011111</td>
              <td class="employee-type">Super Admin</td>
              <td>
                <button class="edit">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
            </tr> */}
            {/* <tr>
              <td class="employee-name">Am</td>
              <td class="employee-pin">121</td>
              <td class="employee-email">am121@am.com</td>
              <td class="employee-contact">012111111</td>
              <td class="employee-type">Employee</td>
              <td>
                <button class="edit">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     employeesData: state.employee,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchEmployees: () => dispatch(fetchEmployees()),
//   };
// };
export default Employees;
