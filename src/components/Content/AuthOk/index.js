import React, { Component } from 'react';

class AuthOk extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    localStorage.setItem('auth', 'false');
  }

  render() {
    return (
      <form action="/login">
        <button type="submit" onClick={this.handleClick}>выйти</button>
      </form>

    );
  }
}

export default AuthOk;
