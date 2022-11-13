import {
  CREATE,
  UPDATE,
  DELETE,
  GETALL,
  GETBYID,
} from "../constants/actionTypes";

import * as API from "../api/projectsAPI";

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await API.getProjects();
    dispatch({ type: GETALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProjects = () => async (dispatch) => {
  try {
    const { data } = await API.createProject();
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editProjects = () => async (dispatch) => {
  try {
    const { data } = await API.editProject();
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjectByID = () => async (dispatch) => {
  try {
    const { data } = await API.getProjectById();
    dispatch({ type: GETBYID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await API.deleteProject();
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
