import { useState } from "react";
import {useForm} from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
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
  const {register,handleSubmit,formState:{errors}}=useForm();
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

  const onSubmit = async () => {
    createProject(formData);
    resetFormData();
    console.log(formData);
  };
  console.log(errors)

  return (
    <>
      <Link to="/projects" className="btn btn-primary mb-3 employee-list">
        Project List
      </Link>
      <h3>Add New Project</h3>
      <form
        action=""
        className="d-grid gap-4 my-5 addproject-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="data d-flex flex-column gap-2">
          <label for="project-Name">Project Name</label>
          <input
           {...register('name',{required:'This field is required',minLength:{value:5,message:'minimum length is 5 characters'}})}
            type="text"
            id="project-Name"
            autocomplete="off"
            placeholder="Enter project name"
            name="name"
            value={name}
            onChange={changeHandler}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="error">{message}</p>}
          ></ErrorMessage>
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
            required
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
            required
            onChange={changeHandler}
            value={endDate}
          />
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="description">Description</label>
          <textarea
          {...register('description',{required:'This field is required',minLength:{value:5,message:'minimum length is 5 characters'}})}
            name="description"
            id=""
            rows="4"
            placeholder="Enter project description"
            className="border"
            onChange={changeHandler}
            value={description}
          ></textarea>
          <ErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => <p className="error">{message}</p>}
          ></ErrorMessage>
        </div>
        <div className="data d-flex flex-column gap-2">
          <label for="summary">Summary</label>
          <textarea
          {...register('summary',{required:'This field is required',minLength:{value:5,message:'minimum length is 5 characters'}})}
            name="summary"
            id=""
            rows="4"
            placeholder="Enter project summary"
            className="border"
            onChange={changeHandler}
            value={summary}
          ></textarea>
          <ErrorMessage
            errors={errors}
            name="summary"
            render={({ message }) => <p className="error">{message}</p>}
          ></ErrorMessage>
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
