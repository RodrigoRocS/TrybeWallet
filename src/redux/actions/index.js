// Coloque aqui suas actions
import getCurrencies from '../../services/currencies';

export const VALID_EMAIL = 'VALID_EMAIL';
export const FETCH_CURRENCIES_LIST = 'FETCH_CURRENCIES_LIST';
export const FETCH_CURRENCIES_FAIL = 'FETCH_CURRENCIES_FAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SUM_ASK = 'SUM_ASK';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDIT = 'SAVE_EDIT';

export const addEmail = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});

export const sumAsk = (payload) => ({ type: SUM_ASK, payload });

export const fetchCurrenciesList = (currencies) => ({
  type: FETCH_CURRENCIES_LIST,
  payload: currencies,
});

export const fetchCurrenciesFail = (errorMessage) => ({
  type: FETCH_CURRENCIES_FAIL,
  payload: errorMessage,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  try {
    const currencies = await getCurrencies();
    dispatch(fetchCurrenciesList(currencies));
  } catch (error) {
    dispatch(fetchCurrenciesFail('Erro no carregamento'));
  }
};

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const delExpense = (payload) => ({ type: DELETE_EXPENSE, payload });

export const editExpense = (payload) => ({ type: EDIT_EXPENSE, payload });

export const saveEdit = (payload) => ({ type: SAVE_EDIT, payload });
