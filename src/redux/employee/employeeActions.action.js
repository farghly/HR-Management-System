import {
  getEmployees,
  //   getEmployeeById,
  //   createEmployee,
  //   editEmployee,
  //   deleteEmployee,
} from "./employeeAPI.api";
import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
} from "./employeeTypes.type";

export const getEmployeesRequest = () => {
  return {
    type: GET_EMPLOYEE_REQUEST,
  };
};
export const getEmployeesSuccess = (employees) => {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    payload: employees,
  };
};
export const getEmployeesFailure = (error) => {
  return {
    type: GET_EMPLOYEE_FAILURE,
    payload: error,
  };
};

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(getEmployeesRequest());
    getEmployees()
      .then((response) => {
        const employees = response.data.data.data;
        dispatch(getEmployeesSuccess(employees));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getEmployeesFailure(errorMsg));
      });
  };
};
