import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Wrapper, Field, Btn, Error,
} from './style';

const Form = ({
  name,
  clickAuth,
  inputLogin,
  inputPass,
  inputPassRep,
  stateSign: {
    valueLogin,
    valuePass,
    valuePassRep,
    disabled,
    displayErrorEmail,
    displayErrorPass,
    displayErrorPassRep, // statusAutorize,
  },
  ...ownProps,
}) => {
  const handleClick = (event) => {
    // event.preventDefault();
    clickAuth(event.target.id, ownProps.history);
  };

  const handleLogin = (event) => {
    inputLogin(event.target.value, event.target.id);
  };

  const handlePass = (event) => {
    inputPass(event.target.value, event.target.id);
  };
  const handlePassRep = (event) => {
    inputPassRep(event.target.value);
  };

  // if (statusAutorize === 'success') { return (<Redirect to="/Auth" />); }
  return (
    <div>
      <Wrapper>
        <label htmlFor="login">email</label>
        <Field
          type="text"
          name={(name === 'signin') ? 'emailIn' : 'emailUp'}
          id={(name === 'signin') ? 'emailIn' : 'emailUp'}
          placeholder="enter email"
          value={valueLogin}
          onChange={handleLogin}
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
          onChange={handlePass}
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
            onChange={handlePassRep}
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
    </div>
  );
};
Form.propTypes = {
  name: PropTypes.string.isRequired,
  inputLogin: PropTypes.func.isRequired,
  inputPass: PropTypes.func.isRequired,
  clickAuth: PropTypes.func.isRequired,
  inputPassRep: PropTypes.func.isRequired,
  stateSign: PropTypes.shape({
    valueLogin: PropTypes.string.isRequired,
    valuePass: PropTypes.string.isRequired,
    valuePassRep: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    displayErrorEmail: PropTypes.string.isRequired,
    displayErrorPass: PropTypes.string.isRequired,
    displayErrorPassRep: PropTypes.string.isRequired,
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
export default withRouter(Form);
