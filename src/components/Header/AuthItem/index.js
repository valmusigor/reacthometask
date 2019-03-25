import React, { Component } from 'react';
import * as s from './style';
import CommandList from './CommandList';

class AuthItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { display: 'none' };
  }

  handleClick() {
    this.state.display === 'none' ? this.setState({ display: 'block' }) : this.setState({ display: 'none' });
  }

  render() {
    return (
      <s.Wrapper action="/login">
        <s.Item>User</s.Item>
        <s.Btn type="button" onClick={this.handleClick}>Меню</s.Btn>
        <CommandList visibly={this.state.display} />
      </s.Wrapper>
    );
  }
}
export default AuthItem;
