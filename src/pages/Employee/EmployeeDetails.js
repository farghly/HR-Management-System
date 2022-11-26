import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { deleteEmployee, getEmployeeById } from "./../../api/employeeAPI";
import { useState } from "react";
import moment from "moment";
import { deleteTask, getTasks } from "../../api/tasksAPI";
import { getProjects } from "./../../api/projectsAPI";

const EmployeeDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const employeeId = params.id;
  console.log(employeeId);
  const [employee, setEmployee] = useState({});
  const [tasks, setTasks] = useState([]);
  // const [tasksEmployees, setTasksEmployees] = useState([]);
  const [employeeTasks, setEmployeeTasks] = useState([]);
  const [employeeProjects, setEmployeeProjects] = useState([]);
  let employeeProjectsPros = [];
  useEffect(() => {
    getEmployeeById(employeeId).then((res) => {
      setEmployee(res.data.data.data);
    });
  }, []);

  useEffect(() => {
    const employeeTasksHandle = async () => {
      const tasksProm = await getTasks();
      const tasksRes = tasksProm.data.data.data;
      setTasks(tasksRes);
      const tasksFilter = tasksRes.filter(
        (task) => task.employee[0]._id === employeeId
      );
      setEmployeeTasks(tasksFilter);
    };
    employeeTasksHandle().catch(console.error);
  }, []);

  // useEffect(() => {
  //   const employeeProjectsHandle = async () => {
  //     const projectsProm = await getProjects();
  //     const projectsRes = projectsProm.data.data.data;
  //     const projectsFilter = projectsRes.filter((project)=>{

  //     })
  //   };
  // },[]);
  employeeTasks.forEach((task) => {
    employeeProjectsPros.push(task.project.name);
  });
  let projectsSet = [...new Set(employeeProjectsPros)];
  console.log(projectsSet);
  // employeeTasks = tasks.filter((task) => task.employee._id === employeeId);
  // tasks.forEach((task) => {
  //   if (task.employee._id === employeeId) employeeTasks.push(task);
  // });

  const navigateToEditEmployee = (event) => {
    // console.log(event.currentTarget.id);

    navigate(`/employees/editEmployee/${employeeId}`);
  };

  const deleteEmp = async (event) => {
    const employeeTasks = tasks.filter(
      (task) => task.employee[0]._id === employeeId
    );
    if (window.confirm("Are you sure to delete employee")) {
      employeeTasks.forEach((task) => {
        deleteTask(task._id);
      });
      await deleteEmployee(employeeId);
      navigate("/employees");
      // console.log(event.currentTarget.id);
    }
  };

  return (
    <>
      {employee && (
        <div>
          <Link to="/employees" class="btn btn-primary mb-3 employee-list">
            Back to Employee List
          </Link>
          <h3>Employee Details</h3>
          <div class="employee-content-details p-3 d-flex gap-3 flex-column">
            <h2 class="employee-name">
              {" "}
              <span class="employee-name-details">{employee.name}</span>
            </h2>
            <div class="date-of-joining">
              Date of Joining:{" "}
              <span class="date-of-joining-details">
                {moment(employee.joiningDate).format("LL")}
              </span>
            </div>
            <div class="employee-department">
              Employee Department:{" "}
              <span class="employee-department-details">
                {employee.department && employee.department.name}
              </span>
            </div>
            <div class="employee-project">
              Employee Project:{" "}
              {projectsSet.length === 0 && (
                <span class="employee-task-details">No Projects</span>
              )}
              {projectsSet.length !== 0 && (
                <span class="employee-task-details">
                  {projectsSet.map((project) => (
                    <li>{project}</li>
                  ))}
                </span>
              )}
            </div>
            <div class="employee-task">
              Employee Task:{" "}
              {employeeTasks.length === 0 && (
                <span class="employee-task-details">No Tasks</span>
              )}
              {employeeTasks.length !== 0 && (
                <span class="employee-task-details">
                  {employeeTasks.map((task) => (
                    <li>{task.name}</li>
                  ))}
                </span>
              )}
            </div>
            <div class="employee-btns gap-2 d-flex">
              <div class="delete-employee btn btn-danger" onClick={deleteEmp}>
                Delete
              </div>
              <div
                class="update-employee btn btn-success"
                onClick={navigateToEditEmployee}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeDetails;
