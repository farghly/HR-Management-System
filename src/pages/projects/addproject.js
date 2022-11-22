import { Link } from "react-router-dom";
import "./project.css";
function AddProject() {
  return (
    <>
      <Link to="/projects" class="btn btn-primary mb-3 employee-list">
        Project List
      </Link>
      <h3>Add New Project</h3>
      <form action="" class="d-grid gap-4 my-5 addproject-form">
        <div class="data d-flex flex-column gap-2">
          <label htmlFor="project-Name">Project Name</label>
          <input type="text" id="project-Name" autocomplete="off" placeholder='Enter project name' />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" class="select">
            <option value="to-do">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label htmlFor="employee">Employee</label>
          <select id="employee" name="employee" class="select">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select>
        </div>
        <div class="data d-flex flex-column gap-2">
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" name="startdate" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date" name="enddate" />
        </div>
        <div class="data d-flex flex-column gap-2">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="" rows="4" placeholder='Enter project description' className="border"></textarea>
        </div>
        <div class="btns">
          <input class="btn save me-3" type="submit" value="Save" />
          <input class="btn cancel" type="reset" value="Cancel" />
        </div>
      </form>
    </>
  );
}

export default AddProject;
