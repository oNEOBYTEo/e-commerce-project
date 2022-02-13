import axios from "axios";
import { setIsLoading } from ".";
import { getConfig } from "../../utils";

export const myOrdersActions = {
  setMyOrders: "SET_MY_ORDERS"
};

export const setMyOrders = orders => ({
  type: myOrdersActions.setMyOrders,
  payload: orders
});

export const getMyOrdersThunk = () => {

  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get("https://ecommerce-exercise-backend.herokuapp.com/orders/", getConfig())
      .then(res => dispatch(setMyOrders(res.data)))
      .finally(() => dispatch(setIsLoading(false)));
  }
}

