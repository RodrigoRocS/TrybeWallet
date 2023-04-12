// Coloque aqui suas actions
import getCurrencies from '../../services/currencies';

export const VALID_EMAIL = 'VALID_EMAIL';
export const FETCH_CURRENCIES_REQUEST = 'FETCH_CURRENCIES_REQUEST';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAIL = 'FETCH_CURRENCIES_FAIL';

export const addEmail = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});

export const fetchCurrenciesRequest = () => ({ type: FETCH_CURRENCIES_REQUEST });

export const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
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
    dispatch(fetchCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(fetchCurrenciesFail('Erro no carregamento'));
  }
};
