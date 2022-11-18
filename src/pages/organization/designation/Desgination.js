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

function Desgination() {
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
      console.log(getData.data.data.data);
      setApiData(getData.data.data.data);
    });
    // console.log(event.currentTarget.id);
  };

  return (
    // <div class="container d-flex gap-4 department">
    <>
      <div class="left-side add-department">
        <h3 class="p-3 ps-4">Add Desgination</h3>
        <form
          action=""
          class="d-flex flex-column p-3 gap-3"
          onSubmit={submitHandler}
          method="post"
        >
          {/* <label for="">Desgination Name</label>
          <input type="text" name="" id="" /> */}
          <label for="">Department Name</label>
          <FormInput
            type="text"
            name="name"
            id="dName"
            value={name}
            onChange={changeHandler}
          />
          <div class="btns">
            <button class="save bg-success me-2" type="submit">
              Save
            </button>
            <button class="cancel bg-danger" onClick={resetFormData}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div class="right-side department-list">
        <h3 class="p-3 ps-4">Desgination List</h3>
        <div class="tab p-3">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Desgination Name</th>
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
                        class="delete"
                        id={data._id}
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
      <div></div>

      {/* </div> */}
    </>
  );
}

export default Desgination;
