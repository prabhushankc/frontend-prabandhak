import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };

    case actionType.ERROR_AUTH_SIGNUP:
      return { ...state, errorAuthSignUp: action.payload.errorAuthSignUp };

    default:
      return state;
  }
};

export default authReducer;
