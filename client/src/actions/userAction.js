import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import axios from "axios";

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    //SET CONFIG
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    //CALL THE API TO LOGIN
    const { data } = await axios.post(
      "/api/users",
      {
        name,
        email,
        password,
        pic,
      },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    //SET CONFIG
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    //CALL THE API TO LOGIN
    const { data } = await axios.post(
      "/api/users/login",
      {
        email,
        password,
      },
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
