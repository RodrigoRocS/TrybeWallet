import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpense, sumAsk } from '../redux/actions';

class Table extends Component {
  deleteClick = (id) => {
    const { dispatch } = this.props;
    dispatch(delExpense(id));
    dispatch(sumAsk());
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((e) => (
            <tr key={ e.id }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{ Number(e.value).toFixed(2) }</td>
              <td>
                {(Object.values(e.exchangeRates)
                  .find((el) => e.currency === el.code).name)}

              </td>
              <td>
                {Number(Object.values(e.exchangeRates)
                  .find((el) => el.code === e.currency).ask).toFixed(2)}

              </td>
              <td>
                {+(e.value * (Object.values(e.exchangeRates)
                  .find((el) => el.code === e.currency).ask)).toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button
                  onClick={ () => this.deleteClick(e.id) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>

              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = ({
  expenses: PropTypes.arrayOf(PropTypes.any),
}).isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
