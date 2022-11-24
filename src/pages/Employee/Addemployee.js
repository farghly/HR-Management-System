import "./styles.css";
import { Link, Form } from "react-router-dom";
import { useState, useEffect } from "react";
import FormInput from "./../../components/form-input/FormInput.component";
// import Button from "../../components/button/Button.component";
import { createEmployee } from "./../../api/employeeAPI";
import { getDepartments } from "./../../api/departmentAPI";
import { getDesignations } from "./../../api/designationAPI";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  contactNumber: "",
  department: "web development",
  designation: "senior",
  role: "employee",
  gender: "male",
  birthday: "",
  joiningday: "",
  leavingday: "",
};
function AddEmployee() {
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    getDepartments().then((res) => {
      setDepartments(res.data.data.data);
    });
    getDesignations().then((res) => {
      setDesignations(res.data.data.data);
    });
  }, {});
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
    confirmPassword,
    name,

    contactNumber,
    department,
    designation,
    role,
    gender,
    birthday,
    joiningday,
    leavingday,
    NID,
  } = formFields;
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    createEmployee(formFields);
    resetFormFields();
  };
  return (
    <>
      <Link to="/employees" className="btn btn-primary mb-3 employee-list">
        Employee List
      </Link>
      <h3>Add New Employee</h3>
      <form onSubmit={submitHandler} className="d-grid gap-4 my-5 add-employee">
        <div className="data d-flex flex-column gap-2"></div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Full Name"
            type="text"
            id="name"
            autocomplete="off"
            required
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder="Enter your last name"
          />
        </div>

        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Email"
            type="email"
            id="email"
            name="email"
            autocomplete="off"
            required
            value={email}
            onChange={changeHandler}
            placeholder="Enter your email adress"
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Password"
            type="password"
            id="password"
            name="password"
            autocomplete="off"
            required
            value={password}
            onChange={changeHandler}
            placeholder="Enter your password"
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="confirm Password"
            type="password"
            id="password"
            name="confirmPassword"
            autocomplete="off"
            required
            value={confirmPassword}
            onChange={changeHandler}
            placeholder="Re-enter your password"
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="NID"
            type="text"
            id="NID"
            name="NID"
            autocomplete="off"
            required
            value={NID}
            onChange={changeHandler}
            placeholder="Enter your nationality ID"
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Contact Number"
            type="number"
            required
            name="contactNumber"
            value={contactNumber}
            onChange={changeHandler}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="department">Department </label>
          <select
            id="department"
            name="department"
            className="select"
            onChange={changeHandler}
            value={department}
          >
            {/* <option name="one" value="one"  disabled>
              select a dep
            </option> */}
            <option selected>Please Select a department</option>
            {departments.map((department) => (
              <option id={department._id} value={department._id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="designation">Designation </label>
          <select
            id="designation"
            name="designation"
            className="select"
            onChange={changeHandler}
            value={designation}
          >
            <option selected>Please Select a designation</option>
            {designations.map((designation) => (
              <option id={designation._id} value={designation._id}>
                {designation.name}
              </option>
            ))}
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            className="select"
            onChange={changeHandler}
            value={role}
          >
            <option selected>Please Select a role</option>
            <option value="admin" name="admin">
              Admin
            </option>
            <option value="hr" name="hr">
              HR
            </option>
            <option value="employee" name="employee">
              Employee
            </option>
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            className="select"
            onChange={changeHandler}
            value={gender}
          >
            <option selected>Please Select a gender</option>

            <option name="male" value="male">
              Male
            </option>
            <option name="female" value="female">
              Female
            </option>
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Date Of Birth"
            type="date"
            id="birth-day"
            name="birthday"
            required
            value={birthday}
            onChange={changeHandler}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Date Of Joining"
            type="date"
            id="joining-day"
            name="joiningday"
            required
            value={joiningday}
            onChange={changeHandler}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Date Of Leaving"
            type="date"
            id="leaving-day"
            name="leavingday"
            value={leavingday}
            onChange={changeHandler}
          />
        </div>
        <div className="data d-flex align-items-end gap-2 ">
          <button type="submit" className="save" style={{ color: "black" }}>
            Save
          </button>
        </div>

        {/* <div className="btns"></div> */}
      </form>
    </>
  );
}

export default AddEmployee;
