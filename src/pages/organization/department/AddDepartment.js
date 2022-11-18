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
         
      </>
   )
}

export default AddDepartment
