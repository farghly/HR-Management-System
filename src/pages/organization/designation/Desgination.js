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
      console.log(getData.data.data.data);
      setApiData(getData.data.data.data);
    });
    // console.log(event.currentTarget.id);
  };

  return (
    <>
      <div class=" gap-4 row department">
        <div class="left-side add-department col-lg-5 col-12">
          <h3 class="p-3 ps-4">Add Designation</h3>

          {/*  */}
          <form
          action=""
          class="d-flex flex-column py-3 gap-3"
          onSubmit={submitHandler}
        >
          <label for="">Designation Name</label>
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
    
        
        
        <div class="right-side department-list col-lg-6 col-12">
          <h3 class="p-3 ps-4">Designation List</h3>
          <div class="tab table-scrl">
            <table class="table table-striped table-hover">
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
                          class="delete"
                          onClick={() => deleteDesignation(data._id)}
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
