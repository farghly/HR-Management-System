import { combineReducers } from "redux";
// import employeeReducer from "./employee/employeeReducer.reducer";
import { authReducer } from "./auth/authReducer.reducer";
import { errorReducer } from "./auth/errorReducer.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

export default rootReducer;
