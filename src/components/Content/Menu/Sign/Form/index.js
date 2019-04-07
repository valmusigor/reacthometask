import React, { Component } from 'react';
import { Wrapper, Field, Btn, Error } from './style';
import { userAdmin } from './config';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLogin: '',
      inputPass: '',
      statusLogin: 'false',
      statusPassword: 'false',
      disabled: true,
      displayErrorEmail: 'none',
      displayErrorPass: 'none',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    localStorage.setItem('auth', 'false');
  }

  handleClick() {
    if (this.state.inputLogin == userAdmin.email && this.state.inputPass === userAdmin.password) {
      localStorage.setItem('auth', 'true');
    } else { localStorage.setItem('auth', 'false'); }
  }

  handleLogin(event) {
    this.setState({ inputLogin: event.target.value });
    let str = event.target.value.trim();
    const result = str.match(/@/gi);
    if (result === null) {
      this.setState({ disabled: true, statusLogin: 'false', displayErrorEmail: 'inline' });
    } else if (result.length > 1) {
      this.setState({ disabled: true, displayErrorEmail: 'inline' });
    }
    else if (result.length === 1 && this.state.statusPassword === 'true') {
      this.setState({ disabled: false, displayErrorEmail: 'none' });
    } else {
      this.setState({ statusLogin: 'true', displayErrorEmail: 'none' });
    }
  }

  handlePass(event) {
    this.setState({ inputPass: event.target.value });
    const str = event.target.value.trim();
    if (str.length < 4) {
      this.setState({ disabled: true, statusPassword: 'false', displayErrorPass: 'inline' });
    }
    else if (this.state.statusLogin === 'true') {
      this.setState({ disabled: false, displayErrorPass: 'none' });
    } else this.setState({ statusPassword: 'true', displayErrorPass: 'none' });
  }

  render() {
    return (
      <form action="/auth" method="GET">
        <Wrapper>
          <label htmlFor="login">email</label>
          <Field
            type="text"
            name="login"
            id="login"
            placeholder="enter email"
            value={this.state.inputLogin}
            onInput={this.handleLogin}
          />
          <Error display={this.state.displayErrorEmail}>Неверно введен email</Error>
        </Wrapper>
        <Wrapper>
          <label htmlFor="pass1">password</label>
          <Field
            type="password"
            name="pass1"
            id="pass1"
            placeholder="enter password"
            value={this.state.inputPass}
            onInput={this.handlePass}
          />
          <Error display={this.state.displayErrorPass}>Неверно введен пароль</Error>
        </Wrapper>
        {this.props.name === 'signup' && (
        <Wrapper>
          <label htmlFor="pass2">repeat password</label>
          <Field type="password" name="pass2" id="pass2" placeholder="repeat password" />
        </Wrapper>
        )}
        <Wrapper>
          <Btn {...(this.state.disabled)?{ disabled:true }:{}} onClick={this.handleClick}>
            {(this.props.name === 'signin') ? 'Sign in' : 'Sign up'}
          </Btn>
        </Wrapper>
      </form>
    );
  }
}
export default Form;
