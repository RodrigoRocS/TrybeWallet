import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEdit, fetchCurrenciesThunk, sumAsk } from '../redux/actions';

class EditForm extends Component {
  state = {
    id: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch, idToEdit } = this.props;
    dispatch(fetchCurrenciesThunk());
    this.setState({ id: idToEdit });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(saveEdit(this.state));
    dispatch(sumAsk());
  };

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <form action="">
          <input
            type="number"
            data-testid="value-input"
            placeholder="Valor da despesa:"
            name="value"
            value={ value }
            onChange={ this.onInputChange }
          />
          <label htmlFor="">
            Moeda:
            <select
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.onInputChange }
            >
              { currencies.map((e) => <option value={ e } key={ e }>{e}</option>) }
            </select>
          </label>
          <label htmlFor="">
            Método de method:
            <select
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.onInputChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="">
            Tag:
            <select
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.onInputChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            name="description"
            value={ description }
            onChange={ this.onInputChange }
          />
          <button
            onClick={ this.handleClick }
            data-testid="save-edit-btn"
          >
            Editar despesa

          </button>
        </form>
      </>
    );
  }
}

EditForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  idToEdit: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  idToEdit: state.wallet.idToEdit,
});
export default connect(mapStateToProps)(EditForm);
