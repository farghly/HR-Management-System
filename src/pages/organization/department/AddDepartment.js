import React, { useEffect, useState } from 'react'
import { createDepartment, getDepartments } from '../../../api/departmentAPI'
import FormInput from '../../../components/form-input/FormInput.component';

const defaultFormData = {
   name: ''
};

const AddDepartment = () => {

   const [formData, setFormData] = useState(defaultFormData);
   const { name } = formData;

   const changeHandler = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      console.log(formData);
   }
   const resetFormData = () => {
      setFormData(defaultFormData);
   };

   const submitHandler = async (event) => {
      event.preventDefault();
      createDepartment(formData);
      resetFormData();
   };

   return (
      <>
         <div class="left-side add-department col-lg-5 col-12">
            <h3 class="p-3 ps-4">Add Department</h3>
            <form action="" class="d-flex flex-column p-3 gap-3" onSubmit={submitHandler}>
               <label for="">Department Name</label>
               <FormInput type="text" name="name" id="dName" value={name} onChange={changeHandler}
               />
               <div class="btns">
                  <button type='submit' class="save bg-success me-2">Save</button>
                  <button class="cancel bg-danger">Cancel</button>
               </div>
            </form>
         </div>
      </>
   )
}

export default AddDepartment
