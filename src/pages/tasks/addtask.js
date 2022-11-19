import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createTask } from "../../api/tasksAPI";
import FormInput from "../../components/form-input/FormInput.component";
import { getEmployeeById, getEmployees } from "./../../api/employeeAPI";

const defaultFormData = {
  name: "",
  createdAt: "",
  summary: "",
  description: "",
  employee: "",
  startDate: "",
  endDate: "",
};

function AddTask() {
  const [formData, setFormData] = useState(defaultFormData);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  const { name, summary, description, employee, startDate, endDate } = formData;

  useEffect(() => {
    getEmployees().then((res) => {
      setEmployees(res.data.data.data);
    });
  }, []);
  // console.log(employees);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    createTask(formData);
    resetFormData();
    console.log(formData);
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
          <label for="tName">Task Name</label>
          <FormInput
            type="text"
            id="name"
            autocomplete="off"
            name={name}
            value={name}
            onChange={changeHandler}
            placeholder='Enter task name'
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="description">Description</label>
          <textarea
            className="border"
            name="description"
            id="description"
            rows="4"
            value={description}
            onChange={changeHandler}
            placeholder='Enter description task'
          ></textarea>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="summary">Summary</label>
          <textarea
            className="border"
            name="summary"
            id="summary"
            rows="4"
            value={summary}
            onChange={changeHandler}
            placeholder='Enter task summary'
          ></textarea>
        </div>

        <div className="data d-flex flex-column gap-2">
          <label for="employee">Employee</label>
          <select
            id="employee"
            name="employee"
            className="select"
            value={employee}
            onChange={changeHandler}
          >
            {/* <option value="one">One</option>
            <option value="two">Two</option> */}
            <option selected>Please select an employee</option>
            {employees &&
              employees.map((employee) => (
                <option value={employee._id} id={employee._id}>
                  {employee.firstName} {employee.lastName}
                </option>
              ))}
          </select>
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
