import { LOADING_ALL, SUCCUSS_ALL, ERROR_ALL } from "./type";

const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const productReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOADING_ALL: {
      return { ...state, loading: true, error: false };
    }
    case SUCCUSS_ALL: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    }
    case ERROR_ALL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
