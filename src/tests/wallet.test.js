import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import mockStore from './helpers/mockStore';
import mockData from './helpers/mockData';
import getCurrencies from '../services/currencies';
import walletReducer from '../redux/reducers/wallet';
import { FETCH_CURRENCIES_LIST, addExpense } from '../redux/actions';

const alimentação = /alimentação/i;

describe('Testando os elementos do componente Wallet', () => {
  let valueInput;
  let currencyInput;
  let methodInput;
  let tagInput;
  let descriptionInput;
  let btnAddExpense;
  beforeEach(() => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    valueInput = screen.getByTestId('value-input');
    currencyInput = screen.getByTestId('currency-input');
    methodInput = screen.getByTestId('method-input');
    tagInput = screen.getByTestId('tag-input');
    descriptionInput = screen.getByTestId('description-input');
    btnAddExpense = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
  });
  test('verifica se a pagina possui os inputs de valor, moeda, metodo de pagamento, tag e descrição', () => {
    expect(valueInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });
  test('verifica se existe um botão com o nome "Adicionar despesa"', () => {
    expect(btnAddExpense).toBeInTheDocument();
  });
});

describe('Testando interações do usuario no componente Wallet', () => {
  let valueInput;
  let currencyInput;
  let methodInput;
  let tagInput;
  let descriptionInput;
  let btnAddExpense;
  beforeEach(() => {
    const initialState = mockStore;
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });
    valueInput = screen.getByTestId('value-input');
    currencyInput = screen.getByTestId('currency-input');
    methodInput = screen.getByTestId('method-input');
    tagInput = screen.getByTestId('tag-input');
    descriptionInput = screen.getByTestId('description-input');
    btnAddExpense = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
  });
  test('verifica se a pagina possui o email inserido no login', () => {
    screen.getByText('tryber@teste.com');
  });
  test('Verifica quantas opções existem no tag selector', () => {
    const tagOptions = within(currencyInput).getAllByRole('option');
    expect(tagOptions).toHaveLength(15);
  });
  test('Testa se o reducer executa a ação de forma correta', () => {
    const state = {
      currencies: [],
    };
    const currencie = { USD: {}, EUR: {} };
    const action = {
      type: FETCH_CURRENCIES_LIST,
      payload: currencie,
    };
    const expectedState = {
      currencies: Object.keys(currencie).filter((e) => e !== 'USDT'),
    };
    expect(walletReducer(state, action)).toEqual(expectedState);
  });
  test('Testa o reducer ao adicionar uma expense', () => {
    const initialState = {
      currencies: [],
      expenses: [],
      editor: false,
      idToEdit: 0,
      errorMessage: null,
      ask: 0,
    };

    const newExpense = {
      id: 1,
      value: 10,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      description: 'Despesa teste',
      exchangeRates: mockData,
    };
    const action = addExpense(newExpense);
    const newState = walletReducer(initialState, action);
    expect(newState.expenses).toHaveLength(1);
  });
  test('verifica se após inserir as informações da despesa ela é mostrada na tela', () => {
    userEvent.type(valueInput, '5');
    userEvent.selectOptions(currencyInput, 'USD');
    userEvent.selectOptions(methodInput, 'Dinheiro');
    userEvent.selectOptions(tagInput, 'Alimentação');
    userEvent.type(descriptionInput, 'Dolar');
    userEvent.click(btnAddExpense);

    screen.getByRole('columnheader', { name: /descrição/i });
    screen.getByRole('columnheader', { name: /tag/i });
    screen.getByRole('columnheader', { name: /método de pagamento/i });
    screen.getByRole('columnheader', { name: 'Valor' });
    screen.getByRole('columnheader', { name: 'Moeda' });
    screen.getByRole('columnheader', { name: /câmbio utilizado/i });
    screen.getByRole('columnheader', { name: /valor convertido/i });
    screen.getByRole('columnheader', { name: /moeda de conversão/i });
    screen.getByRole('columnheader', { name: 'Editar/Excluir' });

    screen.getByRole('cell', { name: /dolar/i });
    screen.getByRole('cell', { name: /alimentação/i });
    screen.getByRole('cell', { name: /dinheiro/i });
    screen.getByRole('cell', { name: /5\.00/i });
    screen.getByRole('cell', { name: /dólar americano\/real brasileiro/i });
    screen.getByRole('cell', { name: /4\.90/i });
    screen.getByRole('cell', { name: /24\.51/i });
    screen.getByRole('button', { name: /editar despesa/i });
    screen.getByRole('button', { name: /excluir/i });
  });
  test('Verifica se ao clicar no botão de editar despesa o componente EditForm é renderizado', () => {
    const btnEditExpense = screen.getByRole('button', { name: /editar despesa/i });
    userEvent.click(btnEditExpense);
    const btnEditForm = screen.getByTestId('save-edit-btn');
    expect(btnEditForm).toBeInTheDocument();
  });
  test('Verifica se ao clicar no botão de editar despesa os inputs estão controlados', async () => {
    const btnEditExpense = screen.getByRole('button', { name: /editar despesa/i });
    userEvent.click(btnEditExpense);
    userEvent.type(valueInput, '5');
    userEvent.selectOptions(currencyInput, 'USD');
    userEvent.selectOptions(methodInput, 'Dinheiro');
    userEvent.selectOptions(tagInput, 'Alimentação');
    userEvent.type(descriptionInput, 'Dolar');
    waitFor(() => {
      expect(valueInput).toHaveValue('5');
      expect(currencyInput).toHaveValue('USD');
      expect(methodInput).toHaveValue('Dinheiro');
      expect(tagInput).toHaveValue(alimentação);
      expect(descriptionInput).toHaveValue('Dolar');
    });
  });
  test('Verifica se ao clicar no botão de editar e salvar a despesa é atualizada', async () => {
    const btnEditExpense = screen.getByRole('button', { name: /editar despesa/i });
    userEvent.click(btnEditExpense);
    const btnEditForm = screen.getByTestId('save-edit-btn');
    userEvent.type(descriptionInput, 'teste');
    userEvent.click(btnEditForm);
    waitFor(() => { expect(screen.getByText('teste')).toBeInTheDocument(); });
  });
  test('Verifica se ao clicar no botão "Excluir" a despesa some da tela', () => {
    const btnDelExpense = screen.getByRole('button', { name: /excluir/i });
    const dol = screen.getByRole('cell', { name: /dolar/i });
    userEvent.click(btnDelExpense);
    expect(dol).not.toBeInTheDocument();
  });
  test('Verifica se ao editar uma despesa o botão "Adicionar despesa" sai da tela', () => {
    const btnEditExpense = screen.getByRole('button', { name: /editar despesa/i });
    userEvent.click(btnEditExpense);
    expect(btnAddExpense).not.toBeInTheDocument();
  });
  test('Verifica se o valor total das despesas é informado no header', () => {
    const totalValue = screen.getByTestId('total-field');
    expect(totalValue).toBeInTheDocument();
    expect(totalValue.innerHTML).toEqual('24.51');
  });
  test('Testa o retorno da API', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    const currencies = await getCurrencies();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
    expect(currencies).toEqual(mockData);
  });
});
