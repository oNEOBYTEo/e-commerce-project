import { loginActions } from "../actions";

const INITIAL_STATE = {
  isLogin: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActions.setIsLogin:
      return {
        ...state,
        isLogin: action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
