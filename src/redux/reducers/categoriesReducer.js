import { categoriesActions } from '../actions';

const INITIAL_STATE = [];

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoriesActions.setProductsCategories:
      return action.payload
    default:
      return state;
  }
}

export default categoriesReducer;