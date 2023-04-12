import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrenciesThunk } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrenciesThunk());
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <form action="">
          <input type="text" data-testid="value-input" placeholder="Valor da despesa:" />
          <label htmlFor="">
            Moeda:
            <select data-testid="currency-input">
              { currencies.map((e) => <option value={ e } key={ e }>{e}</option>) }
            </select>
          </label>
          <label htmlFor="">
            Método de pagamento:
            <select data-testid="method-input" value="">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="">
            Tag:
            <select data-testid="tag-input" value="">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <input type="text" data-testid="description-input" placeholder="Descrição" />
        </form>
      </>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
export default connect(mapStateToProps)(WalletForm);
