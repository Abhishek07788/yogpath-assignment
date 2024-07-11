import { LOADING_DETAILS, SUCCUSS_DETAILS, ERROR_DETAILS } from "./type";

const initialState = {
  loading: false,
  singleProduct: {},
  error: false,
};

export const singleProductReducer = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case LOADING_DETAILS: {
      return { ...state, loading: true, error: false };
    }
    case SUCCUSS_DETAILS: {
      return {
        ...state,
        loading: false,
        error: false,
        singleProduct: payload,
      };
    }
    case ERROR_DETAILS: {
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
