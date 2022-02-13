import { productsActions } from '../actions'

const INITIAL_STATE = {
  productsList: [],
  productDetail: {}
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case productsActions.setProductsList:
      return {
        ...state,
        productsList: action.payload  
      };

    case productsActions.setProductDetail:
      return{
        ...state,
        productDetail: action.payload
      };

    default:
      return state;
  }
}

export default productsReducer;