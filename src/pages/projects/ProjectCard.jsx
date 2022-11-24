import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "./../../api/projectsAPI";
import { getTasks } from "./../../api/tasksAPI";

function ProjectCard() {
  const params = useParams();
  const [currentProject, setCurrentProject] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getProjectById(params.id).then((res) => {
      setCurrentProject(res.data.data.data);
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
                  Task : {task.name} / Employee : {task.employee[0].name}
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
          <div class="project-btns gap-2 d-flex">
            <div class="delete-project btn btn-danger">Delete</div>
            <div class="update-project btn btn-success">Update</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
