import {
  LOADING_ALL,
  SUCCUSS_ALL,
  ERROR_ALL,
  LOADING_DETAILS,
  SUCCUSS_DETAILS,
  ERROR_DETAILS,
} from "./type";
const API = "https://mock-server-0rak.onrender.com/products";

// get all products --
export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_ALL });
  try {
    const res = await fetch(API);
    const data = await res.json();
    dispatch({ type: SUCCUSS_ALL, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_ALL });
  }
};

// get single product --
export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: LOADING_DETAILS });
  try {
    const res = await fetch(`${API}/${id}`);
    const data = await res.json();
    dispatch({ type: SUCCUSS_DETAILS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_DETAILS });
  }
};
