import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, ask } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          { ask }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  ask: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  ask: state.wallet.ask,
});
export default connect(mapStateToProps)(Header);
