import jwtDecode from "jwt-decode";
import { loginApi } from "../../api/authAPI.api";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./authTypes.type";
import { setAuthToken } from "../../utils/setAuthToken";

export const setCurrentUser = (userId) => {
  return {
    type: SET_CURRENT_USER,
    payload: userId,
  };
};

export const userLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const getErrors = (error) => {
  return {
    type: GET_ERRORS,
    payload: error,
  };
};

export const login = (userData) => {
  return (dispatch) => {
    // dispatch(userLoading());
    loginApi(userData)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data;
        console.log(token);
        localStorage.setItem("jwtToken", token);
        const decoded = jwtDecode(token);
        console.log(decoded);
        dispatch(setCurrentUser(decoded));
      })
      .catch((error) => {
        dispatch(getErrors(error));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    console.log("first");
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };
};
