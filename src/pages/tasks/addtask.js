import { Link } from "react-router-dom";
import "./task.css";
function AddTask() {
  return (
    <>
      <Link to="../tasks" class="btn btn-primary my-3 task-list">
        Tasks List
      </Link>
      <h3>Add New Task</h3>
      <form action="" class="d-flex gap-4 my-5 form task">
        <div class="data d-flex flex-column gap-2">
          <label for="tName">Task Name</label>
          <input type="text" id="tName" autocomplete="off" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="description">Description</label>
          <textarea name="" id="description" rows="4"></textarea>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="summary">Summary</label>
          <textarea name="" id="summary" rows="4"></textarea>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label for="employee">Employee</label>
          <select id="employee" name="employee" class="select">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select>
        </div>
        <input class="btn btn-success" type="submit" value="Save" />
      </form>
    </>
  );
}
export default AddTask;
