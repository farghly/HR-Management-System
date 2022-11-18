import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";

const TasksCard = (props) => {
  // const auth = useSelector((state) => state.auth);
  // const [user, setUser] = useState({});
  // console.log(auth);
  // useEffect(() => {
  //   getEmployeeById(auth.user.id).then((res) => {
  //     setUser(res.data.data.data);
  //   });
  // }, []);
  console.log(props);
  return (
    <>
      <div class="task-content p-3 d-flex gap-3 flex-column">
        <h2 class="task-name">{props.taskName}</h2>
        <div class="task-summary">{props.taskDetails}</div>
        <div class="task-description">{props.taskNotes}</div>
        <div class="task-info d-flex gap-3 align-items-center justify-content-between">
          <div class="task-status p-2">{props.taskCase}</div>
          <div class="task-member">{props.timeRequired} Hr</div>
        </div>
        {/* <div class="task-member">{props.taskStartDate} </div>
        <div class="task-member">{props.taskEndDate} </div> */}
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
