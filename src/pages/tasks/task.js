import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
import { Link } from "react-router-dom";
import "./task.css";
import TasksCard from "./TasksCard";
import { getTasks } from "../../api/tasksAPI";
function Task() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  // console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
    getTasks().then((res) => {
      setTasks(res.data.data.data);
    });
  }, []);
  const currentUserTasks = [];
  tasks.map((task) =>
    task.employee.map(
      (employee) => employee._id === user._id && currentUserTasks.push(task)
    )
  );
  // console.log(tasks);
  console.log(currentUserTasks);

  // console.log(tasks);

  return (
    <>
      {(tasks || currentUserTasks) && (
        <>
          {user.role === "admin" && (
            <Link to="addtask" class="btn btn-primary mb-3 task-list">
              Add New Task
            </Link>
          )}

          <h3>Tasks List</h3>
          
          <div class="tasks d-grid my-5 gap-3">
            {user.role === "admin" &&
              tasks &&
              tasks.map((task) => (
                <TasksCard
                  taskName={task.name}
                  taskDetails={task.summery}
                  taskNotes={task.description}
                  taskCase={task.status}
                  taskStartDate={task.startDate}
                  taskEndDate={task.endDate}
                  timeRequired="6"
                  user={user}
                />
              ))}
            {(user.role === "hr" || user.role === "employee") &&
              currentUserTasks &&
              currentUserTasks.map((userTask) => (
                <TasksCard
                  taskName={userTask.name}
                  taskDetails={userTask.summery}
                  taskNotes={userTask.description}
                  taskCase={userTask.status}
                  taskStartDate={userTask.startDate}
                  taskEndDate={userTask.endDate}
                  timeRequired="6"
                  user={user}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Task;
