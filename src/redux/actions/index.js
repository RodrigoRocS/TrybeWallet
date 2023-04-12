// Coloque aqui suas actions
import getCurrencies from '../../services/currencies';

export const VALID_EMAIL = 'VALID_EMAIL';
export const FETCH_CURRENCIES_REQUEST = 'FETCH_CURRENCIES_REQUEST';
export const FETCH_CURRENCIES_LIST = 'FETCH_CURRENCIES_LIST';
export const FETCH_CURRENCIES_FAIL = 'FETCH_CURRENCIES_FAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SUM_ASK = 'SUM_ASK';

export const addEmail = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});

export const fetchCurrenciesRequest = () => ({ type: FETCH_CURRENCIES_REQUEST });

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
    dispatch(fetchCurrenciesRequest());
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
