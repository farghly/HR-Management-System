import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
import { Link } from "react-router-dom";
import "./task.css";
import TasksCard from "./TasksCard";
import { deleteTask, editTask, getTasks } from "../../api/tasksAPI";
function Task() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  let [doneTasks, setDoneTasks] = useState([]);
  let [isGoingTasks, setIsGoingTasks] = useState([]);
  let [allDoneTasks, setAllDoneTasks] = useState([]);
  const [taskState, setTaskState] = useState();

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

  allDoneTasks = tasks.filter((task) => task.status === "Done");
  doneTasks = currentUserTasks.filter((task) => task.status === "Done");
  isGoingTasks = currentUserTasks.filter((task) => task.status === "Is Going");

  // setDoneTasks(
  //   currentUserTasks.filter((task) =>
  //     task.status = "Done"
  //   )
  // );
  console.log(doneTasks);
  // console.log(tasks);
  // console.log(currentUserTasks);

  // console.log(tasks);

  const updateTaskByDone = (event) => {
    console.log(event.currentTarget.id);
    editTask(event.currentTarget.id, { status: "Done" }).then(() => {
      setTaskState("Done");
    });
  };

  const deleteCurrentTask = async (event) => {
    if (window.confirm("Are you sure to delete employee")) {
      deleteTask(event);
      await getTasks().then((res) => {
        setTasks(res.data.data.data);
      });
      const currentUserTasks = [];
      tasks.map((task) =>
        task.employee.map(
          (employee) => employee._id === user._id && currentUserTasks.push(task)
        )
      );
      allDoneTasks = tasks.filter((task) => task.status === "Done");
      doneTasks = currentUserTasks.filter((task) => task.status === "Done");
      isGoingTasks = currentUserTasks.filter(
        (task) => task.status === "Is Going"
      );
      setAllDoneTasks(allDoneTasks);
      setDoneTasks(doneTasks);
      setIsGoingTasks(isGoingTasks);
    }
  };

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
                  taskDetails={task.summary}
                  // taskNotes={task.description}
                  taskCase={task.status}
                  taskStartDate={task.startDate}
                  taskEndDate={task.endDate}
                  taskId={task._id}
                  timeRequired="6"
                  user={user}
                  updateTaskByDone={updateTaskByDone}
                  deleteCurrentTask={deleteCurrentTask}
                />
              ))}
            {(user.role === "hr" || user.role === "employee") &&
              isGoingTasks &&
              isGoingTasks.map((userTask) => (
                <TasksCard
                  taskName={userTask.name}
                  taskDetails={userTask.summary}
                  // taskNotes={userTask.description}
                  taskCase={userTask.status}
                  taskStartDate={userTask.startDate}
                  taskEndDate={userTask.endDate}
                  taskId={userTask._id}
                  timeRequired="6"
                  user={user}
                  updateTaskByDone={updateTaskByDone}
                />
              ))}
          </div>
          <h3>Done Tasks</h3>

          <div class="tasks d-grid my-5 gap-3">
            {user.role === "admin" &&
              allDoneTasks &&
              allDoneTasks.map((task) => (
                <TasksCard
                  taskName={task.name}
                  taskDetails={task.summary}
                  // taskNotes={task.description}
                  taskCase={task.status}
                  taskStartDate={task.startDate}
                  taskEndDate={task.endDate}
                  taskId={task._id}
                  timeRequired="6"
                  user={user}
                  updateTaskByDone={updateTaskByDone}
                  deleteCurrentTask={deleteCurrentTask}
                />
              ))}
            {(user.role === "hr" || user.role === "employee") &&
              doneTasks &&
              doneTasks.map((userTask) => (
                <TasksCard
                  taskName={userTask.name}
                  taskDetails={userTask.summary}
                  // taskNotes={userTask.description}
                  taskCase={userTask.status}
                  taskStartDate={userTask.startDate}
                  taskEndDate={userTask.endDate}
                  taskId={userTask._id}
                  timeRequired="6"
                  user={user}
                  updateTaskByDone={updateTaskByDone}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Task;
