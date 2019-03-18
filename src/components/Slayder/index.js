import React, { Component } from 'react';
import Arrow from './Arrow';
import Item from './Item';
import Wrapper from './style';

class Slayder extends Component {
  constructor(props) {
    super(props);
    const mas = [];
    for (let i = 1; i <= 8; i++) {
      mas[i - 1] = require(`./Item/Images/${i}.jpg`);
    }
    this.state = { path: mas };
    setInterval(() => { this.handleClick('left'); }, 3000);
  }

  handleClick(id) {
    const mas = [];
    if (id == 'left') {
      for (let i = 0; i < this.state.path.length; i++) {
        if (i == this.state.path.length - 1) {
		  mas[i] = this.state.path[0];
	    } else {
		mas[i] = this.state.path[i + 1];
	    }
      }
	}
	else {
      for (let i = this.state.path.length - 1; i >= 0; i--) {
        if (i > 0) {
		  mas[i] = this.state.path[i-1];
		}
        else {
		  mas[i]=this.state.path[this.state.path.length-1];
		}
      }
  }


    this.setState({ path: mas });
  }

  render() {
    return (
      <Wrapper>
        <Arrow name="left" eve={this.handleClick.bind(this, 'left')} />
        <Item indexItem={this.state.path[0]} />
        <Item indexItem={this.state.path[1]} />
        <Item indexItem={this.state.path[2]} />
        <Item indexItem={this.state.path[3]} />
        <Arrow name="right" eve={this.handleClick.bind(this, 'right')} />
      </Wrapper>
    );
  }
}

export default Slayder;
