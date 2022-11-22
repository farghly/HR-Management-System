import React from "react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <>
      <Link to={"/projects"} class="btn btn-primary mb-3 project-list">
        Back to Project List
      </Link>
      <h3>Project Details</h3>
      <div class="project-content-details p-3 d-flex gap-3 flex-column">
        <h2 class="employee-name">
         <span class="project-name-details">Final Project</span>
        </h2>
        <div class="created-at">
          Created at: <span class="created-at-details">1/11/2022</span>
        </div>
        <div class="project-employee">
          Project Employee:{" "}
          <span class="project-employee-details">Mohamed</span>
        </div>
        <div class="project-description">
          Project Description:{" "}
          <span class="project-description-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iste
            iure? Ut est quibusdam sit blanditiis tenetur id sint alias voluptas
            fugiat, aperiam aspernatur sapiente eos iure ea officia molestias!
          </span>
        </div>
        <div class="project-summary">
          Project Summary:{" "}
          <span class="project-summary-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, iste
            iure? Ut est quibusdam sit blanditiis tenetur id sint alias voluptas
            fugiat, aperiam aspernatur sapiente eos iure ea officia molestias!
          </span>
        </div>
        <div class="project-btns gap-2 d-flex">
          <div class="delete-project btn btn-danger">Delete</div>
          <div class="update-project btn btn-success">Update</div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
