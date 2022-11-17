import React,{useState,useEffect} from 'react';
import { getDesignations } from '../../../api/designationAPI';
import axios from 'axios';
import './../department/Department.css'
function Desgination(){
  const [apiData,setApiData] =useState([])

  const handleSubmit= (e)=>{
      e.preventDefault();
      e.target.reset();
  }

  // const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get('https://6374f17708104a9c5f8dfd21.mockapi.io/designation').then((getData) => {
  //     console.log(getData.data);
  //     setApiData(getData.data);
  //   });
  // }, []);

  useEffect(() => {
   getDesignations().then((getData) => {
      console.log(getData.data.data.data);
      setApiData(getData.data.data.data);
    });
  }, []);


  // designations.map((designation) => {
  //   console.log(designation.DesignationName);
  // });

  
    return(
        
        // <div class="container d-flex gap-4 department">
        <>
      
          <div class="left-side add-department">
            <h3 class="p-3 ps-4">Add Desgination</h3>
            <form action="" class="d-flex flex-column p-3 gap-3">
              <label for="">Desgination Name</label>
              <input type="text" name="" id="" />
              <div class="btns">
                <button class="save bg-success me-2">Save</button>
                <button class="cancel bg-danger">Cancel</button>
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
                {apiData.map((data)=>{
                  return(
                    <tr>
                    <td>{data.DesignationName}</td>

                    <td class="d-flex gap-2">
                      <button class="edit">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  )
                })}
                    
            
                </tbody>
              </table>
            
            </div>
          </div>
          <div>

         </div>
          
      {/* </div> */}
      </>        
    )
}

export default Desgination