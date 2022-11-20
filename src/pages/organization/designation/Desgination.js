import React, { useState, useEffect } from "react";
import {
  deleteDesignation,
  getDesignations,
} from "../../../api/designationAPI";
import "./../department/Department.css";
import FormInput from "../../../components/form-input/FormInput.component";
import { createDesignation } from "./../../../api/designationAPI";

const defaultFormData = {
  name: "",
};

function Designation() {
  const [formData, setFormData] = useState(defaultFormData);
  const { name } = formData;
  const [apiData, setApiData] = useState([]);

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
    createDesignation(formData);
    getDesignations().then((getData) => {
      console.log(getData.data.data.data);
      setApiData(getData.data.data.data);
    });
    resetFormData();
  };
  useEffect(() => {
    getDesignations().then((getData) => {
      console.log(getData.data.data.data);
      setApiData(getData.data.data.data);
    });
  }, []);

  const deleteDesign = (event) => {
    deleteDesignation(event.currentTarget.id).then(() => {
      alert("Successfully Deleted");
    });
    getDesignations().then((getData) => {
      // console.log(getData.data.data.data);
      setApiData(getData.data.data.data);
    });
    // console.log(event.currentTarget.id);
  };

  return (
    <>
      <div class=" gap-4 d-flex flex-column department">
        <div class="left-side add-department ">
          <h3 class="p-3 ps-4">Add Desgination</h3>
          <form
            action=""
            class="d-flex flex-column p-3 gap-3"
            onSubmit={submitHandler}
          >
            <label for="">Designation Name</label>
            <FormInput
              type="text"
              name="name"
              id="dName"
              value={name}
              onChange={changeHandler}
              placeholder='Enter job title'
            />

            <div class="btns depart d-flex justify-content-between justify-content-md-start ">
              <button class="save me-2">Save</button>
              <button class="cancel " onClick={resetFormData}>
                Reset
              </button>
            </div>
          </form>
        </div>
        <div class="right-side department-list">
          <h3 class="p-3 ps-4">Desgination List</h3>

          <div class="tab tab-des-dep table-scrl">
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col">Designation Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data) => {
                  return (
                    <tr>
                      <td>{data.name}</td>
                      <td class="d-flex gap-2">
                        <button class="edit">
                          <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button
                          id={data._id}
                          class="delete"
                          onClick={deleteDesign}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Designation;
