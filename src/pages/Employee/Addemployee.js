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
  firstName: "",
  lastName: "",
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
    firstName,
    lastName,
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
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="First Name"
            type="text"
            id="fName"
            autocomplete="off"
            required
            name="firstName"
            value={firstName}
            onChange={changeHandler}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Last Name"
            type="text"
            id="lName"
            autocomplete="off"
            required
            name="lastName"
            value={lastName}
            onChange={changeHandler}
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
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="department">Department </label>
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
            {departments.map((department) => (
              <option id={department._id} value={department._id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="designation">Designation </label>
          <select
            id="designation"
            name="designation"
            className="select"
            onChange={changeHandler}
            value={designation}
          >
            {designations.map((designation) => (
              <option id={designation._id} value={designation._id}>
                {designation.name}
              </option>
            ))}
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="role">Role</label>
          <select
            id="role"
            name="role"
            className="select"
            onChange={changeHandler}
            value={role}
          >
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
          <label for="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            className="select"
            onChange={changeHandler}
            value={gender}
          >
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

        <button type="submit" style={{ color: "black" }}>
          Save
        </button>
        {/* <div className="btns"></div> */}
      </form>
    </>
  );
}

export default AddEmployee;
