import {
  CREATE,
  UPDATE,
  DELETE,
  GETALL,
  GETBYID,
} from "../constants/actionTypes";

import * as API from "../api/departmentAPI";

export const getDepartments = () => async (dispatch) => {
  try {
    const { data } = await API.getDepartments();
    dispatch({ type: GETALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDepartments = () => async (dispatch) => {
  try {
    const { data } = await API.createDepartment();
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editDepartments = () => async (dispatch) => {
  try {
    const { data } = await API.editDepartment();
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDepartmentByID = () => async (dispatch) => {
  try {
    const { data } = await API.getDepartmentById();
    dispatch({ type: GETBYID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDepartment = (id) => async (dispatch) => {
  try {
    await API.deleteDepartment();
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
