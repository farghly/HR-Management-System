import {
  CREATE,
  UPDATE,
  DELETE,
  GETALL,
  GETBYID,
} from "../constants/actionTypes";

import * as API from "../api/tasksAPI";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await API.getTasks();
    dispatch({ type: GETALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTasks = () => async (dispatch) => {
  try {
    const { data } = await API.createTask();
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTasks = () => async (dispatch) => {
  try {
    const { data } = await API.editTask();
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTaskByID = () => async (dispatch) => {
  try {
    const { data } = await API.getTaskById();
    dispatch({ type: GETBYID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await API.deleteTask();
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
