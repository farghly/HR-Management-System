// import { connect } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchEmployees } from "./../../redux";
import { getEmployees, getEmployeesBySearch } from "../../api/employeeAPI";

import "./styles.css";
import { Link } from "react-router-dom";
// import { getEmployees } from "./../../api/index";
// import { response } from "express";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "./../../api/employeeAPI";
import { deleteTask, getTasks } from "./../../api/tasksAPI";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [q, setQ] = useState();
  const [employeeSearchResult, setEmployeeSearchResult] = useState([]);

  const navigate = useNavigate();
  // useEffect(() => {
  //   getEmployees().then((response) => {
  //     setEmployees(response.data.data.data);
  //   });
  // }, []);
  useEffect(() => {
    getEmployees().then((response) => {
      setEmployees(response.data.data.data);
    });
  }, []);
  const [tasks, setTasks] = useState([]);

  // employees.map((employee) => employee && console.log(employee));
  const navigateToEditEmployee = (event) => {
    // console.log(event.currentTarget.id);

    navigate(`/employees/editEmployee/${event.currentTarget.id}`);
  };
  // const refreshData = useEffect(() => {
  //   getEmployees().then((response) => {
  //     setEmployees(response.data.data.data);
  //   });
  // }, []);
  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res.data.data.data);
    });
  }, []);

  const deleteEmp = async (event) => {
    const employeeTasks = tasks.filter(
      (task) => task.employee[0]._id === event.currentTarget.id
    );
    if (window.confirm("Are you sure to delete employee")) {
      employeeTasks.forEach((task) => {
        deleteTask(task._id);
      });
      await deleteEmployee(event.currentTarget.id);
      getEmployees().then((response) => {
        setEmployees(response.data.data.data);
      });
      // console.log(event.currentTarget.id);
    }
  };

  useEffect(() => {
    getEmployeesBySearch(q).then((res) => {
      setEmployeeSearchResult(res.data.data.data);
    });
  }, [q]);

  const searchHandler = (e) => {
    console.log(e.currentTarget.value);
    setQ(e.currentTarget.value);
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
        <h5>Search:</h5>
        <input type="search" onChange={searchHandler} />
      </div>
      <div class="tab table-scrl employee-tab">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Employee Name</th>
              <th scope="col"> Department</th>
              {/* <th scope="col"> Designation</th> */}
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">User Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {q &&
              employeeSearchResult &&
              employeeSearchResult.map((employee) => (
                <>
                  <tr>
                    <td class="employee-name">
                      <Link
                        to={`/employees/employee-details/${employee._id}`}
                      >{`${employee.name} `}</Link>{" "}
                    </td>

                    {employee.department && (
                      <td class="employee-email">{employee.department.name}</td>
                    )}
                    {/* {employee.designation && (
                      <td class="employee-email">
                        {employee.designation.name}
                      </td>
                    )} */}
                    <td class="employee-email">{employee.email}</td>
                    <td class="employee-contact">{`${employee.contactNumber[0]} `}</td>
                    <td class="employee-type">{employee.role}</td>
                    <td class="for-btns gap-2">
                      <button
                        class="edit me-2"
                        id={employee._id}
                        onClick={navigateToEditEmployee}
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        class="delete"
                        id={employee._id}
                        onClick={deleteEmp}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            {!q &&
              employees &&
              employees.map((employee) => (
                <>
                  <tr>
                    <td class="employee-name">
                      <Link
                        to={`/employees/employee-details/${employee._id}`}
                      >{`${employee.name} `}</Link>{" "}
                    </td>

                    {employee.department && (
                      <td class="employee-email">{employee.department.name}</td>
                    )}
                    {/* {employee.designation && (
                      <td class="employee-email">
                        {employee.designation.name}
                      </td>
                    )} */}
                    <td class="employee-email">{employee.email}</td>
                    <td class="employee-contact">{`${employee.contactNumber[0]} `}</td>
                    <td class="employee-type">{employee.role}</td>
                    <td class="for-btns gap-2">
                      <button
                        class="edit me-2"
                        id={employee._id}
                        onClick={navigateToEditEmployee}
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        class="delete"
                        id={employee._id}
                        onClick={deleteEmp}
                      >
                        <i class="fa-solid fa-trash"></i>
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
