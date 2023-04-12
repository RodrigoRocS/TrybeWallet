import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando o componente Login', () => {
  let emailInput;
  let pswInput;
  let loginBtn;
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
    emailInput = screen.getByTestId('email-input');
    pswInput = screen.getByTestId('password-input');
    loginBtn = screen.getByRole('button', { name: /Entrar/i });
  });
  test('verifica se a pagina de login possui o input de email"', () => {
    expect(emailInput).toBeInTheDocument();
  });
  test('verifica se a pagina de login possui o input de password"', () => {
    expect(pswInput).toBeInTheDocument();
  });
  test('verifica se a pagina de login possui um button com o nome "Entrar"', () => {
    expect(loginBtn).toBeInTheDocument();
  });
  test('verifica se informado um email e senha invalido o botão continua desabilitado', () => {
    userEvent.type(emailInput, 'test');
    userEvent.type(pswInput, '1234');

    expect(loginBtn).toBeDisabled();
  });
  test('verifica se informado um email e senha valido o botão é habilitado', () => {
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(pswInput, '123456');
    userEvent.click(loginBtn);

    expect(loginBtn).toBeEnabled();
  });
});

describe('testando redirecionamento de rota', () => {
  test('verifica se informado um email valido e uma senha valida o usuario é redirecionado para a rota /carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const pswInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByRole('button', { name: /Entrar/i });
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(pswInput, '123456');
    userEvent.click(loginBtn);

    expect(history.location.pathname).toBe('/carteira');
  });
});
