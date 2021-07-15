import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
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
