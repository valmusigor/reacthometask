import React, { Component } from 'react';
import SearchFieldContainer from './SearchField/SearchFieldContainer';
import BoardContainer from './Board/BoardContainer';
import { Wrapper } from './style';

class Rent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Heloo i am in rent' };
  }

  render() {
    return (
      <Wrapper>
        <SearchFieldContainer />
        <BoardContainer />
      </Wrapper>
    );
  }
}

export default Rent;
