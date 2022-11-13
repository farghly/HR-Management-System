import {
  CREATE,
  UPDATE,
  DELETE,
  GETALL,
  GETBYID,
} from "../constants/actionTypes";

import * as API from "../api/employeeAPI";

export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await API.getEmployees();
    dispatch({ type: GETALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEmployees = () => async (dispatch) => {
  try {
    const { data } = await API.createEmployee();
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editEmployees = () => async (dispatch) => {
  try {
    const { data } = await API.editEmployee();
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getEmployeeByID = () => async (dispatch) => {
  try {
    const { data } = await API.getEmployeeById();
    dispatch({ type: GETBYID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await API.deleteEmployee();
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
