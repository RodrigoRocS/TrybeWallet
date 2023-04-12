import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando o componente Login', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });
  test('verifica se a pagina de login possui o input de email"', () => {
    screen.getAllByTestId('email-input');
  });
});
