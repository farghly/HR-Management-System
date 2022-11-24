import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectDetails = () => {
  return (
    <>
      <Link to={"/projects"} class="btn btn-primary mb-3 project-list">
        Back to Project List
      </Link>
      <h3>Project Details</h3>
      <ProjectCard />
    </>
  );
};

export default ProjectDetails;
