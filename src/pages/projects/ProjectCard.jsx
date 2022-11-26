import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProject, getProjectById } from "./../../api/projectsAPI";
import { deleteTask, getTasks } from "./../../api/tasksAPI";
import { getEmployeeById } from "./../../api/employeeAPI";

function ProjectCard() {
  const auth = useSelector((state) => state.auth);
  const params = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState({});
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getProjectById(params.id).then((res) => {
      setCurrentProject(res.data.data.data);
    });
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);

  useEffect(() => {
    getTasks().then((res) => {
      setTasks(res.data.data.data);
    });
  }, []);

  console.log(tasks);

  const projectTasks = tasks.filter((task) => {
    return task.project._id === params.id;
  });
  console.log(projectTasks);

  const deleteCurrentTask = async (event) => {
    console.log(event.currentTarget.id);
    if (window.confirm("Are you sure to delete employee")) {
      await projectTasks.forEach((task) => {
        deleteTask(task._id);
      });
      deleteProject(params.id);
      navigate("/projects");
    }
  };

  return (
    <>
      {currentProject && tasks && projectTasks && (
        <div class="project-content-details p-3 d-flex gap-3 flex-column">
          <h2 class="employee-name">
            Project Name:
            <span class="project-name-details"> {currentProject.name}</span>
          </h2>
          <div class="created-at">
            Created at:
            <span class="created-at-details">
              {moment(currentProject.createdAt).format("LL")}
            </span>
          </div>
          <div class="project-employee">
            Project Employee:
            <span class="project-employee-details"></span>
          </div>
          <div class="project-employee">
            Project Tasks:
            <span class="project-employee-details">
              {projectTasks.map((task) => (
                <li>
                  Task : {task.name} / Employee :
                  {task.employee && task.employee[0].name}
                </li>
              ))}
            </span>
          </div>
          <div class="project-description">
            Project Description:
            <span class="project-description-details">
              {currentProject.description}
            </span>
          </div>
          <div class="project-summary">
            Project Summary:
            <span class="project-summary-details">
              {currentProject.summary}
            </span>
          </div>
          {user.role === "admin" && (
            <div class="project-btns gap-2 d-flex">
              <div
                class="delete-project btn btn-danger"
                id={params.id}
                onClick={deleteCurrentTask}
              >
                Delete
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectCard;
