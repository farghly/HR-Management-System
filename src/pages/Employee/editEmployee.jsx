import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FormInput from "./../../components/form-input/FormInput.component";

import { editEmployee, getEmployeeById } from "./../../api/employeeAPI";
import { getDepartments } from "./../../api/departmentAPI";
import { getDesignations } from "./../../api/designationAPI";

function AddEmployee() {
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const params = useParams();
  useEffect(() => {
    getDepartments().then((res) => {
      setDepartments(res.data.data.data);
    });
    getDesignations().then((res) => {
      setDesignations(res.data.data.data);
    });
  }, {});
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    getEmployeeById(params.id).then((res) => {
      console.log(res.data.data.data);
      setEmployee(res.data.data.data);
    });
  }, {});
  const defaultFormFields = {
    name: employee.name,
    contactNumber: employee.contactNumber,
    department: employee.department,
    designation: employee.designation,
    role: employee.role,
    leavingday: employee.leavingday,
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();
  const {
    name,
    contactNumber,
    department,
    designation,
    role,
    joiningday,
    leavingday,
    birthday,
  } = formFields;
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      editEmployee(params.id, formFields);
      navigate("/employees");
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3>Add New Employee</h3>
      <form onSubmit={submitHandler} className="d-grid gap-4 my-5">
        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Full Name"
            type="text"
            id="fName"
            autocomplete="off"
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder={defaultFormFields.name}
          />
        </div>

        <div className="data d-flex flex-column gap-2">
          <FormInput
            label="Contact Number"
            type="number"
            name="contactNumber"
            value={contactNumber}
            onChange={changeHandler}
            placeholder={defaultFormFields.contactNumber}
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
          <FormInput
            label="Date Of Birth"
            type="date"
            id="birth-day"
            name="birthday"
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
