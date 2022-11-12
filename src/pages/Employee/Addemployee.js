import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormInput from "./../../components/form-input/FormInput.component";

const defaultFormFields = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  contactNumber: "",
  department: "",
  designation: "",
  role: "",
  gender: "",
  birthday: "",
  joiningday: "",
  leavingday: "",
};
function AddEmployee() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
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
  } = formFields;
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <>
      <Link to="/employees" className="btn btn-primary mb-3 employee-list">
        Employee List
      </Link>
      <h3>Add New Employee</h3>
      <form action="" className="d-grid gap-4 my-5">
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
          >
            <option name="one" value="one">
              One
            </option>
            <option name="two" value="two">
              Two
            </option>
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="designation">Designation </label>
          <select
            id="designation"
            name="designation"
            className="select"
            onChange={changeHandler}
          >
            <option name="one" value="one">
              One
            </option>
            <option name="two" value="two">
              Two
            </option>
          </select>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="role">Role</label>

          <select
            id="role"
            name="role"
            className="select"
            onChange={changeHandler}
          >
            <option value="admin" name="admin">
              Admin
            </option>
            <option value="user" name="user">
              User
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
            required
            value={leavingday}
            onChange={changeHandler}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <FormInput label="Image" type="file" id="myimage" name="" />
        </div>
        {/* <div className="btns">
          <FormInput
            label="Save"
            className="btn btn-success me-3"
            type="submit"
            value="Save"
            required
            value={email}
            onChange={changeHandler}
          />
          <FormInput
            label="Cancel"
            className="btn btn-danger"
            type="reset"
            value="Cancel"
            required
            value={email}
            onChange={changeHandler}
          />
        </div> */}
      </form>
    </>
  );
}

export default AddEmployee;
