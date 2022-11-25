import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTaskById } from "../../api/tasksAPI";

const TaskDetails = () => {
  const params = useParams();
  const TaskId = params.id;
  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById(TaskId).then((res) => {
      setTask(res.data.data.data);
    });
  });
  return (
    <>
      <Link to="/tasks" class="btn btn-primary mb-3 task-list">
        Back to Tasks List
      </Link>
      <h3>Task Details</h3>
      <div class="task-content-details p-3 d-flex gap-3 flex-column">
        <h2 class="task-name">
          <span>{task.name}</span>
        </h2>
        <div class="task-summary">
          Task Summary: <span class="task-summary-details">{task.summary}</span>
        </div>
        <div class="task-description">
          Task Description:{" "}
          <span class="task-description-details">{task.description}</span>
        </div>
        <div class="task-member">
          Task Employee:{" "}
          <span class="task-member-details">
            {task.employee && task.employee[0].name}
          </span>
        </div>
        <div class="task-status p-2">
          Task Status: <span class="task-status-details">{task.status}</span>
        </div>
        <div class="task-details-btns gap-2 d-flex">
          <div class="delete-task btn btn-danger">Delete</div>
          <div class="update-task btn btn-success">Update</div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
