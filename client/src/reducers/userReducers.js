import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
      break;
    case USER_LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload };
      break;
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
      break;
    case USER_LOGOUT:
      return {};
      break;

    default:
      return state;
      break;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
      break;
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
      break;
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
      break;

    default:
      return state;
      break;
  }
};
