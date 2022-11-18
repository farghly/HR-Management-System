import React, { useEffect, useState } from "react";
import { createDepartment, getDepartments } from "../../../api/departmentAPI";
import FormInput from "../../../components/form-input/FormInput.component";

// import { useEffect,useState } from "react";
import { deleteDepartment } from "../../../api/departmentAPI";
import AddDepartment from "./AddDepartment";
import "./Department.css";
// import { deleteDepartment } from "./../../../api/departmentAPI";
import { useNavigate } from "react-router-dom";

const defaultFormData = {
  name: "",
};
function Department() {
  const [formData, setFormData] = useState(defaultFormData);
  // const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const { name } = formData;
  useEffect(() => {
    getDepartments().then((res) => {
      setDepartments(res.data.data.data);
    });
  }, []);
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
    createDepartment(formData);
    getDepartments().then((res) => {
      setDepartments(res.data.data.data);
    });
    resetFormData();
  };

  const deleteDepart = (event) => {
    deleteDepartment(event.currentTarget.id);
    getDepartments().then((res) => {
      setDepartments(res.data.data.data);
    });
  };

  const navigateToEditDepart = (event) => {};

  return (
    <div class="gap-4 row department">
      <div class="left-side add-department col-lg-5 col-12">
        <h3 class="p-3 ps-4">Add Department</h3>
        <form
          action=""
          class="d-flex flex-column py-3 gap-3"
          onSubmit={submitHandler}
        >
          <label for="">Department Name</label>
          <FormInput
            type="text"
            name="name"
            id="dName"
            value={name}
            onChange={changeHandler}
          />
          <div class="btns">
            <button type="submit" class="save bg-success me-2">
              Save
            </button>
            <button class="cancel bg-danger" onClick={resetFormData}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div class="right-side department-list col-lg-6 col-12">
        <h3 class="p-3 ps-4">Department List</h3>
        <div class="tab table-scrl">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Department Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr>
                  <td>{department.name}</td>
                  <td class="d-flex gap-2">
                    <button
                      class="edit"
                      id={department._id}
                      onClick={navigateToEditDepart}
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button
                      class="delete"
                      id={department._id}
                      onClick={deleteDepart}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Department;
