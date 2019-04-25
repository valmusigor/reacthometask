import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, Field, Btn, Error,
} from './style';

const Form = ({
  name,
  formWorker: {
    inputLogin,
    inputPass,
    clickAuth,
  },
  stateSign: {
    valueLogin,
    valuePass,
    disabled,
    displayErrorEmail,
    displayErrorPass,
  },
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    clickAuth();
  };

  const handleLogin = (event) => {
    inputLogin(event.target.value);
  };

  const handlePass = (event) => {
    inputPass(event.target.value);
  };
  return (
    <form action="/auth" method="GET">
      <Wrapper>
        <label htmlFor="login">email</label>
        <Field
          type="text"
          name="login"
          id="login"
          placeholder="enter email"
          value={valueLogin}
          onInput={handleLogin}
        />
        <Error display={displayErrorEmail}>Неверно введен email</Error>
      </Wrapper>
      <Wrapper>
        <label htmlFor="pass1">password</label>
        <Field
          type="password"
          name="pass1"
          id="pass1"
          placeholder="enter password"
          value={valuePass}
          onInput={handlePass}
        />
        <Error display={displayErrorPass}>Неверно введен пароль</Error>
      </Wrapper>
      {name === 'signup' && (
        <Wrapper>
          <label htmlFor="pass2">repeat password</label>
          <Field type="password" name="pass2" id="pass2" placeholder="repeat password" />
        </Wrapper>
      )}
      <Wrapper>
        <Btn {...(disabled) ? { disabled: true } : {}} onClick={handleClick}>
          {(name === 'signin') ? 'Sign in' : 'Sign up'}
        </Btn>
      </Wrapper>
      <Wrapper />
    </form>
  );
};
Form.propTypes = {
  name: PropTypes.string.isRequired,
  formWorker: {
    inputLogin: PropTypes.func.isRequired,
    inputPass: PropTypes.func.isRequired,
    clickAuth: PropTypes.func.isRequired,
  },
  stateSign: {
    valueLogin: PropTypes.string.isRequired,
    valuePass: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    displayErrorEmail: PropTypes.string.isRequired,
    displayErrorPass: PropTypes.string.isRequired,
  }
};
export default Form;
