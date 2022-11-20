import "./project.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import moment from 'moment'
import ProjecstCard from "./../../components/Cards/ProjecstCard";
import { getEmployeeById } from "../../api/employeeAPI";
import { getProjects } from "../../api/projectsAPI";
function Project() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);
  const [apiProjectData, setProjectData] = useState([]);
  useEffect(() => {
    getProjects().then((getData) => {
      setProjectData(getData.data.data.data);
    });
  }, []);

  return (
    <>
      {(user.role === "admin" || user.role === "hr") && (
        <Link
          to="/projects/addproject"
          class="btn btn-primary mb-3 add-new-project"
        >
          Add New Project
        </Link>
      )}

      <h3 class="p-3 ps-4">Project List</h3>
      <div class="ser d-flex gap-2">
        {/* <h5>Search:</h5>
        <input type="search" /> */}
      </div>
      <div class="tab table-scrl project-tab">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Employee</th> */}
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {apiProjectData.map((data)=>{
              return(
                <ProjecstCard
              name={data.name}
              status={data.status}
          
              startDate={moment(data.startDate).format('LL')}
              endDate={moment(data.endDate).format('LL')}
            />
              )
            })}
           
       
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Project;
