import { Link } from "react-router-dom";
import "./Task.css";
import TasksCard from "./TasksCard";
function Task() {
  return (
    <>
      <Link to="addtask" class="btn btn-primary my-3 task-list">
        Add New Task
      </Link>
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
