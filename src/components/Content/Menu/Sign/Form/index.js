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
    inputPassRep,
    clickAuth,
  },
  stateSign: {
    valueLogin,
    valuePass,
    valuePassRep,
    disabled,
    displayErrorEmail,
    displayErrorPass,
    displayErrorPassRep,
  },
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    clickAuth((event.target.id == 'btnIn') ? 'signin' : 'signup');
  };

  const handleLogin = (event) => {
    inputLogin(event.target.value, (event.target.id == 'emailIn') ? 'signin' : 'signup');
  };

  const handlePass = (event) => {
    inputPass(event.target.value, (event.target.id == 'passIn') ? 'signin' : 'signup');
  };
  const handlePassRep = (event) => {
    inputPassRep(event.target.value);
  };
  return (
    <form action="/auth" method="GET">
      <Wrapper>
        <label htmlFor="login">email</label>
        <Field
          type="text"
          name={(name === 'signin') ? 'emailIn' : 'emailUp'}
          id={(name === 'signin') ? 'emailIn' : 'emailUp'}
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
          name={(name === 'signin') ? 'passIn' : 'passUp'}
          id={(name === 'signin') ? 'passIn' : 'passUp'}
          placeholder="enter password"
          value={valuePass}
          onInput={handlePass}
        />
        <Error display={displayErrorPass}>Неверно введен пароль</Error>
      </Wrapper>
      {name === 'signup' && (
        <Wrapper>
          <label htmlFor="pass2">repeat password</label>
          <Field
            type="password"
            name="passUpRep"
            id="passUpRep"
            placeholder="repeat password"
            value={valuePassRep}
            onInput={handlePassRep}
          />
          <Error display={displayErrorPassRep}>Введенные пароли не совпадают</Error>
        </Wrapper>
      )}
      <Wrapper>
        <Btn
          {...(disabled) ? { disabled: true } : {}}
          onClick={handleClick}
          id={(name === 'signin') ? 'btnIn' : 'btnUp'}
        >
          {(name === 'signin') ? 'Sign in' : 'Sign up'}
        </Btn>
      </Wrapper>
      <Wrapper />
    </form>
  );
};
Form.propTypes = {
  name: PropTypes.string.isRequired,
  formWorker: PropTypes.shape({
    inputLogin: PropTypes.func.isRequired,
    inputPass: PropTypes.func.isRequired,
    clickAuth: PropTypes.func.isRequired,
  }),
  
};
Form.defaultProps = {
  stateSign: {
    valueLogin: '',
    valuePass: '',
    valuePassRep: '',
    disabled: true,
    displayErrorEmail: 'none',
    displayErrorPass: 'none',
    displayErrorPassRep: 'none',
  },
};
export default Form;
