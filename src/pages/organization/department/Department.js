import React, { useEffect, useState } from "react";
import { createDepartment, getDepartments } from "../../../api/departmentAPI";
import FormInput from "../../../components/form-input/FormInput.component";

import { deleteDepartment } from "../../../api/departmentAPI";
import "./Department.css";
import { Link, useNavigate } from "react-router-dom";
import { ValidationDepartment } from "./validation";

const defaultFormData = {
  name: "",
};
const showHide = {
  show: "d-block",
  hide: "d-none",
};
function Department({ user }) {
  const [formData, setFormData] = useState(defaultFormData);
  // const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [editState, setEditState] = useState(showHide.hide);
  const [saveState, setSaveState] = useState(showHide.show);
  const { name } = formData;
  useEffect(() => {
    getDepartments().then((res) => {
      setDepartments(res.data.data.data);
    });
  }, []);

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!values.name || values.name.length < 5) {
      return setError(ValidationDepartment(values));
    } else {
      createDepartment(formData);
      setError(ValidationDepartment(values));
      getDepartments().then((res) => {
        setDepartments(res.data.data.data);
      });
      resetFormData();
    }
  };

  const deleteDepart = (event) => {
    if (window.confirm("Are you Sure to delete?")) {
      deleteDepartment(event.currentTarget.id).then((res) => {
        getDepartments().then((res) => {
          setDepartments(res.data.data.data);
        });
      });
    }
  };

  const editDepartName = (event) => {
    setEditState(showHide.show);
    setSaveState(showHide.hide);
  };
  const saveDepartName = (event) => {
    setEditState(showHide.hide);
    setSaveState(showHide.show);
  };

  /* Validation */
  const [values, setValues] = useState({
    name: "",
  });
  const [errors, setError] = useState({});
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [e.target.name]: e.target.value });
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };
  return (
    <div class="gap-4 d-flex flex-column department ">
      <div class="left-side add-department ">
        <h3 class="p-3 ps-4">Add Department</h3>
        <form
          action=""
          class="d-flex flex-column p-3 gap-3"
          onSubmit={submitHandler}
        >
          <label htmlFor="">Department Name</label>
          <FormInput
            type="text"
            name="name"
            id="dName"
            value={values.name}
            onChange={changeHandler}
          />

          {errors.name && <p className="error">{errors.name}</p>}

          <div class="btns depart d-flex justify-content-between justify-content-md-start">
            <button type="submit" class="save me-2">
              Save
            </button>
            <button class="cancel " onClick={resetFormData}>
              Reset
            </button>
          </div>
        </form>
      </div>

      <div class="right-side department-list">
        <h3 class="p-3 ps-4">Department List</h3>
        <div class="tab tab-des-dep table-scrl">
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Department Name</th>
                {user.role === "admin" && <th scope="col">Action</th>}
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr>
                  <td className={`department-name`}>
                    <Link
                      to={"/department-details"}
                      className={`department-name ${saveState}`}
                    >
                      {department.name}
                    </Link>
                    <input
                      className={`${editState}`}
                      type="text"
                      name="name"
                      id="dName"
                      value={values.name}
                      onChange={changeHandler}
                    />
                  </td>
                  {user.role === "admin" && (
                    <td className="d-flex gap-2">
                      <button
                        className={`edit ${editState}`}
                        id={department._id}
                        onClick={saveDepartName}
                      >
                        <i class="fa-solid fa-check"></i>
                      </button>
                      <button
                        className={`edit ${saveState}`}
                        id={department._id}
                        onClick={editDepartName}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        className="delete"
                        id={department._id}
                        onClick={deleteDepart}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  )}
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
