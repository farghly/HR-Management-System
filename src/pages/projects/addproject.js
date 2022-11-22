import { useState } from "react";
import { Link } from "react-router-dom";
import { createProject } from "../../api/projectsAPI";
import "./project.css";

const defaultFormData = {
  name: "",
  summary: "",
  description: "",
  startDate: "",
  endDate: "",
  importance: "",
};

function AddProject() {
  const [formData, setFormData] = useState(defaultFormData);

  let { name, summary, description, startDate, endDate, importance } = formData;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const test = { ...formData, [name]: value };
    setFormData(() => test);
    console.log(formData);
    // console.log(event.target);
    console.log(event.target.value);
  };

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    createProject(formData);
    resetFormData();
    console.log(formData);
  };

  return (
    <>
      <Link to="/projects" className="btn btn-primary mb-3 employee-list">
        Project List
      </Link>
      <h3>Add New Project</h3>
      <form
        action=""
        className="d-grid gap-4 my-5 addproject-form"
        onSubmit={submitHandler}
      >
        <div className="data d-flex flex-column gap-2">
          <label for="project-Name">Project Name</label>
          <input
            type="text"
            id="project-Name"
            autocomplete="off"
            placeholder="Enter project name"
            name="name"
            value={name}
            onChange={changeHandler}
          />
        </div>

        <div className="data d-flex flex-column gap-2">
          <label for="Importance">Importance</label>
          <select
            id="Importance"
            value={importance}
            name="importance"
            className="select"
            onChange={changeHandler}
          >
            <option selected>Select Project Importance</option>
            <option value="Normal">Normal</option>
            <option value="Very Important"> Very Important</option>
            <option value="Urgent">Urgent</option>
            <option value="Can be done later">Can be done later</option>
          </select>
        </div>

        <div className="data d-flex flex-column gap-2">
          <label for="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            name="startDate"
            value={startDate}
            onChange={changeHandler}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="end-date">End Date</label>
          <input
            type="date"
            id="end-date"
            name="endDate"
            onChange={changeHandler}
            value={endDate}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="description">Description</label>
          <textarea
            name="description"
            id=""
            rows="4"
            placeholder="Enter project description"
            className="border"
            onChange={changeHandler}
            value={description}
          ></textarea>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="summary">Summary</label>
          <textarea
            name="summary"
            id=""
            rows="4"
            placeholder="Enter project description"
            className="border"
            onChange={changeHandler}
            value={summary}
          ></textarea>
        </div>
        <div className="btns">
          <button className="btn save me-3" type="submit">
            Save{" "}
          </button>
          <input className="btn cancel" type="reset" onClick={resetFormData} />
        </div>
      </form>
    </>
  );
}

export default AddProject;
