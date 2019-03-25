import React, { Component } from 'react';
import * as s from './style';

class AuthItem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    localStorage.setItem('auth', 'false');
  }

  render(){
  return(
  <s.Wrapper action="/login">
      <s.Item>User</s.Item>
      <s.Btn type="submit" onClick={this.handleClick}>Выйти</s.Btn>
  </s.Wrapper>
  );
  }
};
export default AuthItem;
