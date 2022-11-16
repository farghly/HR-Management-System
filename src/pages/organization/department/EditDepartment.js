import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { editDepartment, getDepartmentById, getDepartments } from '../../../api/departmentAPI';
import Department from './Department';

const EditDepartment = () => {

   const { dept, setDept } = useState();

   const param = useParams();

   useEffect(() => {
      getDepartments().then((res) => {
         setDept(res.data.data.data)
      })
   }, []);

   const defaultFormData = {
      name: dept.name
   }

   const { formData, setFormData } = useState(defaultFormData);


   const changeHandler = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, name: value });
   };

   const resetFormData = () => {
      setFormData(defaultFormData);
   };

   const submitHandler = async (event) => {
      event.preventDefault();
      try {
         editDepartment(param.id, formData);
         navigate("/department");
         resetFormData();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <table class="table table-striped table-hover">
            <thead>
               <tr>
                  <th scope="col">Department Name</th>
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Mo</td>
                  <td class="d-flex gap-2">
                     <button class="edit">
                        <i class="fa-regular fa-pen-to-square"></i>
                     </button>
                     <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   )
}

export default EditDepartment
