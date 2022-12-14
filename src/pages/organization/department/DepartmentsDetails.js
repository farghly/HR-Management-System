import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDepartmentById } from "../../../api/departmentAPI";
import { editEmployee, getEmployees } from "./../../../api/employeeAPI";

const DepartmentsDetails = () => {
  const params = useParams();
  const departmentId = params.id;
  const [department, setDepartment] = useState({});
  const [employees, setEmployees] = useState([]);
  let [departEmployees, setDepartEmployees] = useState([]);
  useEffect(() => {
    getDepartmentById(departmentId).then((res) => {
      setDepartment(res.data.data.data);
    });
  }, []);
  useEffect(() => {
    getEmployees().then((res) => {
      setEmployees(res.data.data.data);
    });
  }, []);
  departEmployees = employees.filter(
    (employee) => employee.department._id === departmentId
  );

  // const removeEmployeeFromDepartment = (event) => {
  //   console.log(event.currentTarget.id);
  //   editEmployee(event.currentTarget.id, { department: "" });
  //   getEmployees().then((res) => {
  //     setEmployees(res.data.data.data);
  //   });
  //   departEmployees = employees.filter(
  //     (employee) => employee.department._id === departmentId
  //   );
  //   setDepartEmployees(departEmployees);
  // };
  // console.log(department);
  // console.log(employees);
  console.log(departEmployees);
  return (
    <>
      <Link to={"/department"} class="btn btn-primary mb-3">
        Back to Department List
      </Link>
      <h3 class="p-3 ps-4">Department Details</h3>
      <div class="department-details-card p-3 d-flex gap-3 flex-column">
        <h2 class="department-name">
          Department Name: <span>{department.name}</span>
        </h2>
        <div class="department-created-at">
          Created at:{" "}
          <span class="department-created-at-details">
            {moment(department.createdAt).format("LL")}
          </span>
        </div>
        <div class="department-employee">
          Department Employees:{" "}
          {departEmployees.length > 0 ? (
            <span class="department-employee-num">
              {departEmployees.length}
            </span>
          ) : (
            <span class="department-employee-num">
              No Employees in this department
            </span>
          )}
        </div>
        {/* <div class="department-btns gap-2 d-flex">
          <div class="delete-department btn btn-danger">Delete</div>
          <div class="update-department btn btn-success">Update</div>
        </div> */}
      </div>
      {departEmployees.length > 0 && (
        <div class="tab tab-details-dep table-scrl">
          <table class="table department-details-table">
            <thead>
              <tr>
                <th scope="col">Employee Name</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {departEmployees.map((employee) => (
                <tr>
                  <td class="employee-name">{employee.name}</td>
                  {/* <td>
                    <button
                      id={employee._id}
                      class="delete"
                      onClick={removeEmployeeFromDepartment}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DepartmentsDetails;
