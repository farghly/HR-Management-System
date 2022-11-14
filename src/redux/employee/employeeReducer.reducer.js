import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
} from "./employeeTypes.type";

const INITIAL_STATE = {
  loading: false,
  employees: [],
  error: "",
};

export const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
        error: "",
      };
    case GET_EMPLOYEE_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default employeeReducer;
