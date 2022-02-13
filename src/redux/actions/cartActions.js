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
      .then(() => dispatch(getCartThunk()))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  }
};

export const buyCartThunk = (cart) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/cart/buy/", cart, getConfig())
      .then(() => dispatch(getCartThunk()))
      .catch((error) => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  }
}

export const removeProductCartThunk = (id) => {
  return (dispatch)=> {
    axios
      .delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig())
      .then(() => dispatch(getCartThunk()))
      .catch((error) => handleError(error))
  }
};

export const removeCartThunk = () => {
  return (dispatch)=> {
    axios
      .delete("https://ecommerce-exercise-backend.herokuapp.com/cart/empty_cart/"
      , getConfig())
      .then(() => dispatch(getCartThunk()))
      .catch((error) => handleError(error))
  }
}