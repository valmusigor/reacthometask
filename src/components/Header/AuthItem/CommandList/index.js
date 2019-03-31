import React, { Component } from 'react';
import * as s from './style';


class CommandList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    localStorage.setItem('auth', 'false');
  }

  render() {
    return (
      <s.Wrapper visibly={this.props.visibly}>
        <s.Item><s.Linki href="#">Диалоги</s.Linki></s.Item>
        <s.Item><s.Linki href="#">Новости</s.Linki></s.Item>
        <s.Btn type="submit" onClick={this.handleClick}>Выйти</s.Btn>
      </s.Wrapper>
    );
  }
}

export default CommandList;
