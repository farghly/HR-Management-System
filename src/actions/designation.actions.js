import {
  CREATE,
  UPDATE,
  DELETE,
  GETALL,
  GETBYID,
} from "../constants/actionTypes";

import * as API from "../api/designationAPI";

export const getDesignations = () => async (dispatch) => {
  try {
    const { data } = await API.getDesignations();
    dispatch({ type: GETALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDesignations = () => async (dispatch) => {
  try {
    const { data } = await API.createDesignation();
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editDesignations = () => async (dispatch) => {
  try {
    const { data } = await API.editDesignation();
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDesignationByID = () => async (dispatch) => {
  try {
    const { data } = await API.getDesignationById();
    dispatch({ type: GETBYID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDesignation = (id) => async (dispatch) => {
  try {
    await API.deleteDesignation();
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
