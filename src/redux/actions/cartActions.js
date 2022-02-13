import axios from "axios";
import { handleError, setIsLoading } from ".";
import { getConfig } from "../../utils";

export const cartActions = {
  setCart: "SET_CART"
};

export const setCart = (cart) => ({
  type: cartActions.setCart,
  payload: cart,
});

export const getCartThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get("https://ecommerce-exercise-backend.herokuapp.com/cart/", getConfig())
      .then(res => dispatch(setCart(res.data)))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  }
};

export const addCartThunk = (cart) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/", cart, getConfig())
      .then(() => getCartThunk())
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  }
}