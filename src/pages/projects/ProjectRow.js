import React from "react";
import { Link } from "react-router-dom";

const ProjectRow = ({ project, user, ...props }) => {
  console.log(props);
  return (
    <>
      <tr>
        <td class="project-name">
          <Link to={`/projects/project-details/${project._id}`}>
            {props.name}
          </Link>
        </td>
        <td class="project-status">{props.status}</td>
        {/* <td class="project-employee">{props.employee}</td> */}
        <td class="project-start-date">{props.startDate}</td>
        <td class="project-end-date">{props.endDate}</td>
        {user.role === "admin" && (
          <td>
            <button class="edit">
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
          </td>
        )}
      </tr>
    </>
  );
};

export default ProjectRow;
