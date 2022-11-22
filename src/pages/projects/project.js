import "./project.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";

import ProjectCard from "../../components/Cards/ProjectsCard";

import { getEmployeeById, getEmployeesBySearch } from "../../api/employeeAPI";
import { getProjects, getProjectsBySearch } from "../../api/projectsAPI";

// import { getEmployees } from "./../../api/employeeAPI";

function Project() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [q, setQ] = useState();
  // console.log(auth);

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

  useEffect(() => {
    if (q) {
      (async () => {
        const {
          data: {
            data: { data },
          },
        } = await getProjectsBySearch(q);

        setProjects(data);
      })();
    }
  }, [q]);

  const searchHandler = (e) => {
    console.log(e.currentTarget.value);
    setQ(e.currentTarget.value);
    console.log(projects);
  };

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
        <h5>Search:</h5>
        <input type="search" onChange={searchHandler} />
      </div>
      <div class="tab table-scrl project-tab">
        <table class="table ">
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
          {!q && (
            <tbody>
              {apiProjectData.map((data) => {
                return (
                  <ProjectCard
                    name={data.name}
                    status={data.status}
                    startDate={moment(data.startDate).format("LL")}
                    endDate={moment(data.endDate).format("LL")}
                  />
                );
              })}
            </tbody>
          )}
          {q && (
            <tbody>
              {projects.map((data) => {
                return (
                  <ProjectCard
                    name={data.name}
                    status={data.status}
                    startDate={moment(data.startDate).format("LL")}
                    endDate={moment(data.endDate).format("LL")}
                  />
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default Project;
