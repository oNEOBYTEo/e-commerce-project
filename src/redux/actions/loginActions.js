import axios from "axios"
import { history } from "../../utils"

export const loginActions = {
  setIsLogin: "SET_IS_LOGIN"
};

export const setIsLogin = isLogin => ({
  type: loginActions.setIsLogin,
  payload: isLogin
});

export const doLoginThunk = (data) => {
  return dispatch => {
    return axios
      .post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
      .then(res => {
        localStorage.setItem("token", res.data.access)
        dispatch(setIsLogin(true))
        history.replace("/shop")
        }
      )
  }
};

export const doLogoutThunk = () => {
  return dispatch => {
    dispatch(setIsLogin(false));
    history.replace('/login');
  }
};

export const handleError = (error) => {
  if (error.response.status === 401) {
    localStorage.setItem("token", "");
    history.replace("/login");
  }
  console.log(error.response);
};
