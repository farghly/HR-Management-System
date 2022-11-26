import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getEmployeeById } from "../../api/employeeAPI";
import { editTask, getTaskById } from "../../api/tasksAPI";

const TaskDetails = () => {
  const params = useParams();
  const TaskId = params.id;
  const [task, setTask] = useState({});
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [taskState, setTaskState] = useState(task.status);

  // console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);
  useEffect(() => {
    getTaskById(TaskId).then((res) => {
      setTask(res.data.data.data);
      setTaskState(res.data.data.data.status);
    });
  }, []);
  // console.log(task.status);
  const updateTaskStatus = (event) => {
    // console.log(event.currentTarget.id);
    if (task.status === "Done") {
      editTask(event.currentTarget.id, { status: "Is Going" }).then(() => {
        setTaskState("Is Going");
      });
    } else if (task.status === "Is Going") {
      editTask(event.currentTarget.id, { status: "Done" }).then(() => {
        setTaskState("Done");
      });
    }
  };
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
          Task Status: <span class="task-status-details">{taskState}</span>
        </div>
        <div class="task-details-btns gap-2 d-flex">
          {user.role === "admin" && (
            <div class="delete-task btn btn-danger">Delete</div>
          )}
          <div
            class="update-task btn btn-success"
            id={task._id}
            onClick={updateTaskStatus}
          >
            Update
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
