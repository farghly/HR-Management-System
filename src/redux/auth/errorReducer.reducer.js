import { GET_ERRORS } from "./authTypes.type";
const initialState = {};
export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
