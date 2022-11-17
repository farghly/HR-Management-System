import React from 'react'

const TasksCard = (props) => {
  return (
    <>

              <div class="task-content p-3 d-flex gap-3 flex-column">
                 <h2 class="task-name">{props.taskName}</h2>
                 <div class="task-summary">{props.taskDetails}
                 </div>
                 <div class="task-description">{props.taskNotes}
                 </div>
                 <div
                    class="task-info d-flex gap-3 align-items-center justify-content-between"
                 >
                    <div class="task-status p-2">{props.taskCase}</div>
                    <div class="task-member">{props.timeRequired} Hr</div>
                 </div>
                 <div class="task-btns gap-2 d-flex">
                    <div class="delete-task btn btn-danger">Delete</div>
                    <div class="update-task btn btn-success">Update</div>
                 </div>
              </div>

    </>
  )
}

export default TasksCard
