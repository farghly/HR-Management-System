import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
import { Link } from "react-router-dom";
import { editTask } from "../../api/tasksAPI";

const TasksCard = ({ updateTaskByDone, ...props }) => {
  // const auth = useSelector((state) => state.auth);
  // const [user, setUser] = useState({});
  // console.log(auth);
  // useEffect(() => {
  //   getEmployeeById(auth.user.id).then((res) => {
  //     setUser(res.data.data.data);
  //   });
  // }, []);
  const [taskState, setTaskState] = useState(props.taskCase);
  const [taskStateBGC, setTaskStateBGC] = useState("");

  const requiredTime =
    (new Date(props.taskStartDate) - new Date(props.taskEndDate)) /
    (1000 * 3600 * 24);
  console.log(props);

  // if (Number(requiredTime) <= 0) {
  //   setTaskStateBGC("red");
  // }
  return (
    <>
      <div class="task-content p-3 d-flex gap-3 flex-column">
        <Link to={`/tasks/task-details/${props.taskId}`} class="task-name">
          {props.taskName}
        </Link>
        <div class="task-summary"> {props.taskDetails}</div>
        <div class="task-description"> {props.taskNotes}</div>
        <div class="task-info d-flex gap-3 align-items-center justify-content-between">
          <div class="task-status p-2">{taskState}</div>
          {taskState === "Is Going" && (
            <div class="task-member" style={{ backgroundColor: taskStateBGC }}>
              Required Days :{requiredTime}
              day
            </div>
          )}
        </div>
        <div class="task-member">
          Start Date : {moment(props.taskStartDate).format("LL")}
        </div>
        <div class="task-member">
          End Date : {moment(props.taskEndDate).format("LL")}
        </div>
        <div class="task-btns gap-2 d-flex justify-content-evenly">
          {props.user.role === "admin" && (
            <div class="delete-task btn btn-danger">Delete</div>
          )}
          {/* {(props.user.role === "hr" || props.user.role === "employee") && (
            <div
              id={props.taskId}
              class="delete-task btn btn-danger"
              onClick={(event) => updateTaskByDone(event)}
            >
              update
            </div>
          )} */}
          {/* <div class="update-task btn btn-success">Update</div> */}
        </div>
      </div>
    </>
  );
};

export default TasksCard;
