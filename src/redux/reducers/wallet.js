import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_LIST,
  FETCH_CURRENCIES_FAIL, ADD_EXPENSE, SUM_ASK, DELETE_EXPENSE } from '../actions';

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
      ask: +(state.expenses
        .reduce((acc, curr) => acc + (curr.value * (Object.values(curr.exchangeRates)
          .find((el) => el.code === curr.currency).ask)), 0)).toFixed(2),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e.id !== action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
