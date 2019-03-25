import React, { Component } from 'react';
import { Wrapper, Field, Btn } from './style';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { inputLogin: '', inputPass: '' };
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    localStorage.setItem('auth', 'false');
  }

  handleClick() {
    if (this.state.inputLogin === 'admin' && this.state.inputPass === '1234') {
      localStorage.setItem('auth', 'true');
    } else { localStorage.setItem('auth', 'false'); }
  }

  handleLogin(event) {
    this.setState({ inputLogin: event.target.value });
  }

  handlePass(event) {
    this.setState({ inputPass: event.target.value });
  }

  render() {
    return (
      <form action="/auth" method="GET">
        <Wrapper>
          <label htmlFor="login">login</label>
          <Field
            type="text"
            name="login"
            id="login"
            placeholder="enter login"
            value={this.state.inputLogin}
            onChange={this.handleLogin}
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor="pass1">password</label>
          <Field
            type="password"
            name="pass1"
            id="pass1"
            placeholder="enter password"
            value={this.state.inputPass}
            onChange={this.handlePass}
          />
        </Wrapper>
        {this.props.name === 'signup' && (
        <Wrapper>
          <label htmlFor="pass2">repeat password</label>
          <Field type="password" name="pass2" id="pass2" placeholder="repeat password" />
        </Wrapper>
        )}
        <Wrapper>
          <Btn onClick={this.handleClick}>
            {(this.props.name === 'signin') ? 'Sign in' : 'Sign up'}
          </Btn>
        </Wrapper>
      </form>
    );
  }
}
export default Form;
