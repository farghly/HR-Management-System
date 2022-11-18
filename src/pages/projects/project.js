import "./project.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import ProjecstCard from "./../../components/Cards/ProjecstCard";
import { getEmployeeById } from "../../api/employeeAPI";
function Project() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
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
        <h5>Search:</h5>
        <input type="search" />
      </div>
      <div class="tab table-scrl project-tab">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Status</th>
              <th scope="col">Employee</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <ProjecstCard
              name="Final Project"
              status="Doing"
              employee="Students"
              startDate="01-11-2022"
              endDate="19-11-2022"
            />
            <ProjecstCard
              name="Final Project"
              status="Doing"
              employee="Students"
              startDate="01-11-2022"
              endDate="19-11-2022"
            />
            <ProjecstCard
              name="Final Project"
              status="Doing"
              employee="Students"
              startDate="01-11-2022"
              endDate="19-11-2022"
            />
            <ProjecstCard
              name="Final Project"
              status="Doing"
              employee="Students"
              startDate="01-11-2022"
              endDate="19-11-2022"
            />
            <ProjecstCard
              name="Final Project"
              status="Doing"
              employee="Students"
              startDate="01-11-2022"
              endDate="19-11-2022"
            />

            <tr>
              <td class="project-name">Final Project</td>
              <td class="project-status">Doing</td>
              <td class="project-employee">Students</td>
              <td class="project-start-date">1/11/2022</td>
              <td class="project-end-date">19/11/2022</td>
              <td>
                <button class="edit">
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Project;
