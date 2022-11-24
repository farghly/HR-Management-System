import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { getTaskIdAfterSave } from "../../../back-end/controller/taskController";
import {
  getProjectsBySearch,
  getProjectById,
  editProject,
} from "../../api/projectsAPI";
import { createTask } from "../../api/tasksAPI";
import FormInput from "../../components/form-input/FormInput.component";
import {
  editEmployee,
  getEmployeeById,
  getEmployees,
  getEmployeesBySearch,
} from "./../../api/employeeAPI";

const defaultFormData = {
  name: "",
  summary: "",
  description: "",
  employee: "",
  startDate: "",
  endDate: "",
  importance: "",
};

function AddTask() {
  const [formData, setFormData] = useState(defaultFormData);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [employeeSearchQ, setEmployeeSearchQ] = useState("");
  const [projectSearchQ, setProjectSearchQ] = useState("");
  const [employeeSearchValue, setEmployeeSearchValue] = useState();
  const [projectSearchValue, setProjectSearchValue] = useState();
  const [taskCreated, setTaskCreated] = useState({});
  const [employeeOfTask, setEmployeeOfTask] = useState({});
  const [projectOfTask, setProjectOfTask] = useState({});

  let { name, summary, description, employee, startDate, endDate, importance } =
    formData;

  // useEffect(() => {
  //   getEmployees().then((res) => {
  //     setEmployees(res.data.data.data);
  //   });
  // }, []);

  useEffect(() => {
    if (employeeSearchQ) {
      (async () => {
        const {
          data: {
            data: { data },
          },
        } = await getEmployeesBySearch(employeeSearchQ);

        setEmployees(data);
      })();
    }
  }, [employeeSearchQ]);
  // console.log(employees);

  useEffect(() => {
    if (projectSearchQ) {
      (async () => {
        const {
          data: {
            data: { data },
          },
        } = await getProjectsBySearch(projectSearchQ);

        setProjects(data);
      })();
    }
  }, [projectSearchQ]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const test = { ...formData, [name]: value };
    setFormData(() => test);
    console.log(formData);
    // console.log(event.target);
    console.log(event.target.value);
  };

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // const taskRes = await createTask(formData);
    // const newTask = { ...taskRes.data.data.data };
    // setTaskCreated(newTask);
    // const employeeRes = await getEmployeeById(newTask.employee[0]);
    // const employee = { ...employeeRes.data.data.data };
    // const employeeTasks = employee.tasks;
    // console.log(employeeTasks);
    // employeeTasks.push(newTask._id);
    // const updateEmployee = await editEmployee(newTask.employee[0], {
    //   tasks: employeeTasks,
    // });
    // console.log(updateEmployee.data.data.data);
    // const projectRes = await getProjectById(newTask.project);
    // const project = { ...projectRes.data.data.data };
    // const projectTasks = project.tasks;
    // projectTasks.push(newTask._id);
    // const updateProject = await editProject(newTask.project, {
    //   tasks: projectTasks,
    // });
    // console.log(updateProject.data.data.data);
    resetFormData();
    console.log(formData);
  };

  const setProject = (event) => {
    const test = { ...formData, project: event.currentTarget.id };
    let projectName = event.currentTarget.dataset.projectname;
    setFormData(() => test);
    setProjectSearchValue(projectName);
    setProjectSearchQ("");
    console.log(projectName);

    console.log(formData);

    console.log(event.currentTarget);
  };

  const setEmployee = (event) => {
    const test = { ...formData, employee: event.currentTarget.id };
    let employeeName = event.currentTarget.dataset.employeename;
    setFormData(() => test);
    setEmployeeSearchValue(employeeName);
    setEmployeeSearchQ("");
    console.log(employeeName);

    console.log(formData);

    console.log(event.currentTarget);
  };
  const employeeSearchHandler = (e) => {
    console.log(e.currentTarget.value);
    setEmployeeSearchValue(e.currentTarget.value);
    setEmployeeSearchQ(e.currentTarget.value);
    console.log(employees);
  };
  const projectSearchHandler = (e) => {
    console.log(e.currentTarget.value);
    setProjectSearchValue(e.currentTarget.value);
    setProjectSearchQ(e.currentTarget.value);
    console.log(employees);
  };

  return (
    <>
      <Link to="/tasks" className="btn btn-primary mb-3 task-list">
        Tasks List
      </Link>
      <h3>Add New Task</h3>
      <form
        action=""
        className="d-grid gap-4 my-5 task"
        onSubmit={submitHandler}
      >
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="tName">Task Name</label>
          <FormInput
            type="text"
            id="name"
            autocomplete="off"
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder="Enter task name"
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="border"
            name="description"
            id="description"
            rows="4"
            value={description}
            onChange={changeHandler}
            placeholder="Enter description task"
          ></textarea>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="summary">Summary</label>
          <textarea
            className="border"
            name="summary"
            id="summary"
            rows="4"
            value={summary}
            onChange={changeHandler}
            placeholder="Enter task summary"
          ></textarea>
        </div>

        <div className="data d-flex flex-column gap-2">
          <label for="project">Project</label>

          <input
            type="search"
            onChange={projectSearchHandler}
            placeholder="Enter an project"
            value={projectSearchValue}
          />
          <div>
            {projects.map((project) => (
              <li
                onClick={setProject}
                name="project"
                data-projectname={project.name}
                id={project._id}
              >
                {project.name}
              </li>
            ))}
          </div>
        </div>

        <div className="data d-flex flex-column gap-2">
          <label for="Importance">Importance</label>
          <select
            id="Importance"
            value={importance}
            name="importance"
            className="select"
            onChange={changeHandler}
          >
            <option selected>Select Project Importance</option>
            <option value="Normal">Normal</option>
            <option value="Very Important"> Very Important</option>
            <option value="Urgent">Urgent</option>
            <option value="Can be done later">Can be done later</option>
          </select>
        </div>

        <div className="data d-flex flex-column gap-2">
          <label for="employee">Employee</label>

          <input
            type="search"
            onChange={employeeSearchHandler}
            placeholder="Enter an Employee"
            value={employeeSearchValue}
          />
          <div>
            {employees.map((employee) => (
              <li
                onClick={setEmployee}
                name="employee"
                data-employeename={employee.name}
                id={employee._id}
              >
                {employee.name}
              </li>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <FormInput
            label="start Date"
            type="date"
            id="startDay"
            name="startDate"
            value={startDate}
            required
            onChange={changeHandler}
          />
        </div>

        <div className="d-flex flex-column gap-2 ">
          <FormInput
            label="end Date"
            type="date"
            id="birth-day"
            name="endDate"
            value={endDate}
            required
            onChange={changeHandler}
          />
        </div>

        <input className="btn btn-success save" type="submit" value="Save" />
      </form>
    </>
  );
}
export default AddTask;
