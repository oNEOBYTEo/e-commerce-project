import axios from "axios";
import { handleError, setIsLoading, setProductsList } from ".";
import { getConfig } from "../../utils";

export const categoriesActions = {
  setProductsCategories: "SET_PRODUCTS_CATEGORIES"
};

export const setProductCategories = categories => ({
  type: categoriesActions.setProductsCategories,
  payload: categories,
});


export const getCategoriesThunk = () => {
  return dispatch => {
    dispatch(setIsLoading(true))
    axios
      .get('https://ecommerce-exercise-backend.herokuapp.com/categories/', getConfig())
      .then(res => dispatch(setProductCategories(res.data)))
      .catch(error => handleError(error))
      .finally(() => dispatch(setIsLoading(false)));
  }
};

export const filterCategoryThunk = id => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
      .then(res => dispatch(setProductsList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  }
};

export const filterHeadlineThunk = headline => {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${headline}`, getConfig())
      .then(res => dispatch(setProductsList(res.data)))
      .catch(error => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  }
};