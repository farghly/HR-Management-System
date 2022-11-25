import "./styles.css";
import { Link, Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
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
  const{register,handleSubmit,formState:{errors},watch}=useForm()
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
  const onSubmit = async () => {
    createEmployee(formFields);
    resetFormFields();
  };
  return (
    <>
      <Link to="/employees" className="btn btn-primary mb-3 employee-list">
        Employee List
      </Link>
      <h3>Add New Employee</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="d-grid gap-4 my-5 add-employee">

        <div className="data d-flex flex-column gap-2">
          <FormInput
          {...register('name',{required:'This field required',minLength:{value:3,message:'minimum length is 3 characters'}})}
            label="Full Name"
            type="text"
            id="name"
            autocomplete="off"
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder="Enter your  name"
          />
          <ErrorMessage 
           errors={errors}
           name="name"
           render={({message})=><p className="error">{message}</p>}
          ></ErrorMessage>
        </div>

        <div className="data d-flex flex-column gap-2">
          <FormInput
          {...register('email',{required:'Email is required',minLength:{value:3,message:'email is required'}})}
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
          <ErrorMessage 
           errors={errors}
           name="email"
           render={({message})=><p className="error">{message}</p>}
          ></ErrorMessage>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="password">password</label>
          <input
          {...register('password',{required:'password is required',minLength:{value:8,message:'minimum length for password is 8 characters'}})}
            type="password"
            id="password"
            name="password"
            autocomplete="off"
            value={password}
            onChange={changeHandler}
            placeholder="Enter your password"
          />
          <ErrorMessage 
           errors={errors}
           name="password"
           render={({message})=><p className="error">{message}</p>}
          ></ErrorMessage>
        </div>
         <div className="data d-flex flex-column gap-2">
          <label htmlFor="confirmpassword">confirm password</label>
          <input
          {...register('password',{required:true,validate:(val)=>{
            if (watch('password') !== val) {
              return "Your passwords do no match";
            }
          },
        })}
            type="password"
            id="confirmpassword"
            name="confirmPassword"
            autocomplete="off"
            value={confirmPassword}
            onChange={changeHandler}
            placeholder="Re-enter your password"
          />
          <ErrorMessage 
           errors={errors}
           name="confirmPassword"
           render={({message})=><p className="error">{message}</p>}
          ></ErrorMessage>
        </div> 
        <div className="data d-flex flex-column gap-2">
          <label htmlFor="NID">NID</label>
          <input
          {...register('NID',{  required:'This field is require',minLength:{value:14,message:'NID is 14 number'},maxLength:{value:14,message:'NID is 14 number'}})}
            type="number"
            id="NID"
            name="NID"
            autocomplete="off"
            value={NID}
            onChange={changeHandler}
            placeholder="Enter your nationality ID"
          />
             <ErrorMessage 
           errors={errors}
           name="NID"
           render={({message})=><p className="error">{message}</p>}
          ></ErrorMessage>
        </div>
        <div className="data d-flex flex-column gap-2">
        <label htmlFor="NID">Contact Number</label>
          <input
          {...register('contactNumber',{required:'This Field is required',maxLength:{value:11,message:'phone number is 11 number'}})}
            type="number"
            name="contactNumber"
            value={contactNumber}
            onChange={changeHandler}
            placeholder="Enter your phone number"
          />
             <ErrorMessage 
              errors={errors}
              name="contactNumber"
              render={({message})=><p className="error">{message}</p>}
          ></ErrorMessage>
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
