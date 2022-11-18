import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getEmployeeById } from "../../api/employeeAPI";
import { Link } from "react-router-dom";
import "./Task.css";
import TasksCard from "./TasksCard";
function Task() {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  console.log(auth);
  useEffect(() => {
    getEmployeeById(auth.user.id).then((res) => {
      setUser(res.data.data.data);
    });
  }, []);
  return (
    <>
      {user.role === "admin" && (
        <Link to="addtask" class="btn btn-primary mb-3 task-list">
          Add New Task
        </Link>
      )}

      <h3>Tasks List</h3>
      <div class="tasks d-grid my-5 gap-3">
        <TasksCard
          taskName="Final Project "
          taskDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          taskNotes="Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!"
          taskCase="To Do"
          timeRequired="6"
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
        />
      </div>
    </>
  );
}

export default Task;
