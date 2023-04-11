import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handdleClick = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  render() {
    const { email, password } = this.state;
    const pswLength = 6;
    const isValid = password.length >= pswLength && this.validateEmail(email);

    return (
      <>
        <div>Login</div>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ this.onInputChange }
          placeholder="Email:"
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.onInputChange }
          placeholder="Senha:"
        />
        <button
          disabled={ !isValid }
          onClick={ () => this.handdleClick() }
        >
          Entrar

        </button>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
