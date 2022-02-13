import appReducer from "./appReducer";
import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import loginReducer from "./loginReducer";
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  app: appReducer,
  categories: categoriesReducer,
  product: productsReducer,
  cart: cartReducer,
  login: loginReducer
});

export default rootReducer;
