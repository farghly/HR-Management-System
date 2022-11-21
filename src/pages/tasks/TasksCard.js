import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
import { Link } from "react-router-dom";

const TasksCard = (props) => {
  // const auth = useSelector((state) => state.auth);
  // const [user, setUser] = useState({});
  // console.log(auth);
  // useEffect(() => {
  //   getEmployeeById(auth.user.id).then((res) => {
  //     setUser(res.data.data.data);
  //   });
  // }, []);
  const requiredTime =
    (new Date(props.taskStartDate) - new Date(props.taskEndDate)) /
    (1000 * 3600 * 24);
  console.log(props);
  return (
    <>
      <div class="task-content p-3 d-flex gap-3 flex-column">
        <Link to="/tasks/task-details" class="task-name">
          {props.taskName}
        </Link>
        <div class="task-summary"> {props.taskDetails}</div>
        <div class="task-description">D {props.taskNotes}</div>
        <div class="task-info d-flex gap-3 align-items-center justify-content-between">
          <div class="task-status p-2">{props.taskCase}</div>
          <div class="task-member">
            {" "}
            Required Days :{requiredTime}
            day
          </div>
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
          {(props.user.role === "hr" || props.user.role === "employee") && (
            <div class="delete-task btn btn-danger">Done</div>
          )}
          <div class="update-task btn btn-success">Update</div>
        </div>
      </div>
    </>
  );
};

export default TasksCard;
