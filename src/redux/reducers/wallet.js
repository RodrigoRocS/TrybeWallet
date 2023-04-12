import { FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAIL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  errorMessage: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload,
    };
  case FETCH_CURRENCIES_FAIL:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
