import axios from "axios";
import { setIsLoading } from ".";
import { altGetConfig, getConfig } from "../../utils";

export const productsActions = {
  setProductsList: "SET_PRODUCTS_LIST",
  setProductDetail: "SET_PRODUCT_DETAIL",
}

export const setProductsList = product => ({
  type: productsActions.setProductsList,
  payload: product
});

export const setProductDetail = product => ({
  type: productsActions.setProductDetail,
  payload: product
});

export const getProductsThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    axios
      .get('https://ecommerce-exercise-backend.herokuapp.com/products/', altGetConfig())
      .then(res => dispatch(setProductsList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getProductDetailThunk = id => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
      .then(res => dispatch(setProductDetail(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  };
};