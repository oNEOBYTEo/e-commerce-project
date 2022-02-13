import appReducer from "./appReducer";
import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import loginReducer from "./loginReducer";
import cartReducer from "./cartReducer"
import myOrdersReducer from "./myOrdersReducer";

const rootReducer = combineReducers({
  app: appReducer,
  categories: categoriesReducer,
  product: productsReducer,
  cart: cartReducer,
  myOrders: myOrdersReducer,
  login: loginReducer
});

export default rootReducer;
