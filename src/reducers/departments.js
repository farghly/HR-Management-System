import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (departments = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return '';
    case UPDATE:
      return '';
    case DELETE:
      return departments.filter((department) => department._id !== action.payload);
    default:
      return departments;
  }
};

