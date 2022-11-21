import React from 'react'
import { Link } from 'react-router-dom'

const TaskDetails = () => {
   return (
      <>
         <Link to="/tasks" class="btn btn-primary my-3 task-list">Back to Tasks List</Link>
         <h3>Task Details</h3>
         <div class="task-content p-3 d-flex gap-3 flex-column">
            <h2 class="task-name">Task Name: <span>Final Project</span></h2>
            <div class="task-summary">
               Task Summary:
               <span class="task-summary-details"
               >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                  doloribus debitis minima adipisci assumenda ad ut nesciunt Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus
                  debitis minima adipisci assumenda ad ut nesciunt
               </span>
            </div>
            <div class="task-description">
               Task Summary:
               <span class="task-description-details">
                  delectus? Fuga, hic pariatur asperiores at laboriosam error soluta
                  reiciendis sapiente reprehenderit nesciunt! delectus? Fuga, hic
                  pariatur asperiores at laboriosam error soluta reiciendis sapiente
                  reprehenderit nesciunt!</span>
            </div>
            <div class="task-member">
               Task Member: <span class="task-member-details">Hr</span>
            </div>
            <div class="task-status p-2">
               Task Status: <span class="task-status-details">To Do</span>
            </div>
            <div class="task-btns gap-2 d-flex">
               <div class="delete-task btn btn-danger">Delete</div>
               <div class="update-task btn btn-success">Update</div>
            </div>
         </div>

      </>
   )
}

export default TaskDetails
