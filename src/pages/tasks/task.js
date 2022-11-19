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

  const userTasks = user.tasks; // console.log(tasks);
  console.log(userTasks);
  return (
    <>
      {(tasks || userTasks) && (
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
              userTasks &&
              userTasks.map((userTask) => (
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
            {/* <TasksCard
          taskName="Final Project "
          taskDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          taskNotes="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          taskCase="To Do"
          timeRequired="6"
          user={user}
        /> */}
            {/* <TasksCard
          name="Final Project "
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          status="To Do"
          createdAt="6"
        />

        <TasksCard
          name="Final Project "
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          status="To Do"
          createdAt="6"
        />
        <TasksCard
          name="Final Project "
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          status="To Do"
          createdAt="6"
        />

        <TasksCard
          name="Final Project "
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          status="To Do"
          createdAt="6"
        />

        <TasksCard
          name="Final Project "
          summary="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          description="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          status="To Do"
          createdAt="6"
          taskName="Final Project "
          taskDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          taskNotes="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          taskCase="To Do"
          timeRequired="6"
        />
        <TasksCard
          taskName="Final Project "
          taskDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          taskNotes="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          taskCase="To Do"
          timeRequired="6"
        />

        <TasksCard
          taskName="Final Project "
          taskDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          taskNotes="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          taskCase="To Do"
          timeRequired="6"
        />

        <TasksCard
          taskName="Final Project "
          taskDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          taskNotes="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          taskCase="To Do"
          timeRequired="6"
        /> */}
          </div>
        </>
      )}
    </>
  );
}

export default Task;
