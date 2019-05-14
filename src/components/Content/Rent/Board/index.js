import React, { Component } from 'react';
import {
  Wrapper, Item, Content, Head, Price, Square, Foot,
} from './style';

class Board extends Component {
  componentDidMount() {
    this.props.loadRentalAds();
  }

  render() {
    return (
      <Wrapper>
        {this.props.itemsRentalAds.ads.map(elem => (
          <Item key={elem.id}>
            <Head path_short_image={elem.path_short_image}>
              <Price>{`${elem.price}$`}</Price>
              <Square>{`${elem.square}м.кв.`}</Square>
            </Head>
            <Content>{elem.short_content}</Content>
            <Foot>
              <div>{elem.date}</div>
              <div>{elem.tel}</div>
            </Foot>
          </Item>
        ))}
      </Wrapper>
    );
  }
}

export default Board;
