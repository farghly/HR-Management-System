import { FETCH_ALL} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getDepartments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDepartments();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteDepartment = (id) => async (dispatch) => {
  try {
    await api.deleteDepartment(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


