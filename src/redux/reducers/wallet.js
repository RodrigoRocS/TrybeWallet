import { FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_LIST,
  FETCH_CURRENCIES_FAIL, ADD_EXPENSE, SUM_ASK } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  errorMessage: null,
  expenses: [],
  ask: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case FETCH_CURRENCIES_LIST:
    return {
      ...state,
      isLoading: false,
      currencies: Object.keys(action.payload).filter((e) => e !== 'USDT'),
    };
  case FETCH_CURRENCIES_FAIL:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SUM_ASK:
    return {
      ...state,
      ask: +(state.ask + action.payload).toFixed(2),
    };
  default:
    return state;
  }
};

export default walletReducer;
