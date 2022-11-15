import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
} from "./taskTypes.type";

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


export const getEmployees = ()=>{
    return (dispatch)=>{
        dispatch(getEmployeesRequest())
        
    }
}