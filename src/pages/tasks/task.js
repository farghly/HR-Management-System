import { Link } from 'react-router-dom';
import './task.css'
import TasksCard from '../../components/Cards/TasksCard';
function Task() {
  return (
    <>
      <Link to="addtask" class="btn btn-primary my-3 task-list">Add New Task</Link>
      <h3>Tasks List</h3>
      <div class="tasks d-grid my-5 gap-3">


        <TasksCard
          name='Final Project '
          summary='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          description='Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!'
          status='To Do'
          createdAt='6' />

        <TasksCard
          name='Final Project '
          summary='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          description='Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!'
          status='To Do'
          createdAt='6' />
        <TasksCard
          name='Final Project '
          summary='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          description='Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!'
          status='To Do'
          createdAt='6' />

        <TasksCard
          name='Final Project '
          summary='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          description='Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!'
          status='To Do'
          createdAt='6' />

        <TasksCard
          name='Final Project '
          summary='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          description='Itaque, doloribus debitis minima adipisci assumenda ad ut nesciuntlore
        delectus?Fuga, hic pariatur asperiores at laboriosam error soluta reiciendis sapiente reprehenderit nesciunt!'
          status='To Do'
          createdAt='6' />




      </div>
    </>
  );
}

export default Task;