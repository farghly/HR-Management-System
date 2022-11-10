import React,{ useState, useEffect} from 'react';

import axios from 'axios';

function Departments(){
    const [departments,setDepartments] = useState([])
    useEffect(()=>{
       axios.get('http://localhost:9090/api/v1/department')
       .then(res=>{
        setDepartments(res.data) 
        })
    },[])
      
    return(
      <>
     
        <ul>
            {departments.map(department =>{
               {console.log(department.name)}
            })}
        </ul>
      </>
    )
}

export default Departments;