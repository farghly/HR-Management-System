import "./project.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";

import ProjectCard from "./ProjectRow";

import { getEmployeeById, getEmployeesBySearch } from "../../api/employeeAPI";
import { getProjects, getProjectsBySearch } from "../../api/projectsAPI";
import ProjectRow from "./ProjectRow";

// import { getEmployees } from "./../../api/employeeAPI";
import { getTasks } from "./../../api/tasksAPI";

function Project() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [q, setQ] = useState();
  const [apiProjectData, setProjectData] = useState([]);
  // console.log(auth);

  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
    getTasks().then((res) => {
      setTasks(res.data.data.data);
    });
  }, []);

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

  const currentUserTasks = [];
  tasks.map((task) =>
    task.employee.map(
      (employee) => employee._id === user._id && currentUserTasks.push(task)
    )
  );
  const currentUserProjectsArray = [];
  currentUserTasks.forEach((task) => {
    currentUserProjectsArray.push(task.project);
  });

  const uniqueIds = [];

  console.log(currentUserProjectsArray);
  const currentUserProjects = currentUserProjectsArray.filter((project) => {
    const isDuplicate = uniqueIds.includes(project._id);

    if (!isDuplicate) {
      uniqueIds.push(project._id);

      return true;
    }

    return false;
  });

  console.log(currentUserProjects);

  const searchHandler = (e) => {
    console.log(e.currentTarget.value);
    setQ(e.currentTarget.value);
    console.log(projects);
  };

  return (
    <>
      {user.role === "admin" && (
        <Link
          to="/projects/addproject"
          class="btn btn-primary mb-3 add-new-project"
        >
          Add New Project
        </Link>
      )}

      <h3 class="p-3 ps-4">Project List</h3>
      {(user.role === "admin" || user.role === "hr") && (
        <div class="ser d-flex gap-2">
          <h5>Search:</h5>
          <input type="search" onChange={searchHandler} />
        </div>
      )}
      <div class="tab table-scrl project-tab">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Employee</th> */}
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              {user.role === "admin" && <th scope="col">Action</th>}
            </tr>
          </thead>
          {!q && (user.role === "admin" || user.role === "hr") && (
            <tbody>
              {apiProjectData.map((project) => {
                return (
                  <ProjectRow
                    project={project}
                    name={project.name}
                    status={project.status}
                    startDate={moment(project.startDate).format("LL")}
                    endDate={moment(project.endDate).format("LL")}
                    user={user}
                  />
                );
              })}
            </tbody>
          )}
          {q && (user.role === "admin" || user.role === "hr") && (
            <tbody>
              {projects.map((project) => {
                return (
                  <ProjectRow
                    project={project}
                    name={project.name}
                    status={project.status}
                    startDate={moment(project.startDate).format("LL")}
                    endDate={moment(project.endDate).format("LL")}
                    user={user}
                  />
                );
              })}
            </tbody>
          )}
          {user.role === "employee" && (
            <tbody>
              {currentUserProjects.map((project) => {
                return (
                  <ProjectRow
                    project={project}
                    name={project.name}
                    status={project.status}
                    startDate={moment(project.startDate).format("LL")}
                    endDate={moment(project.endDate).format("LL")}
                    user={user}
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
