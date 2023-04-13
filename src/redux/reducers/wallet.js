import {
  FETCH_CURRENCIES_LIST,
  FETCH_CURRENCIES_FAIL,
  ADD_EXPENSE, SUM_ASK,
  DELETE_EXPENSE, EDIT_EXPENSE, SAVE_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  errorMessage: null,
  ask: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_LIST:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((e) => e !== 'USDT'),
    };
  case FETCH_CURRENCIES_FAIL:
    return {
      ...state,
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
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case SAVE_EDIT: {
    const editedExpense = state.expenses
      .map((e) => (e.id === action.payload.id
        ? { ...action.payload, exchangeRates: e.exchangeRates } : e));
    return {
      ...state,
      editor: false,
      expenses: editedExpense,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
