import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import mockStore from './helpers/mockStore';

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
});
