import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "../products/productReducer";
import { singleProductReducer } from "../products/singleProductReducer";

const allReducer = combineReducers({
  product: productReducer,
  singleProduct: singleProductReducer,
});

export const store = legacy_createStore(allReducer, applyMiddleware(thunk));
