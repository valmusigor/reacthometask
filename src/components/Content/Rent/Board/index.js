import React, { Component } from 'react';
import {
  Wrap, Wrapper, Item, Content, Head, Price, Square, Foot,
} from './style';
import Paginator from './Paginator';

class Board extends Component {
  componentDidMount() {
    this.props.loadRentalAds();
    if(this.props.match.params.id)
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <Wrap>
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
        <Paginator
          currentPage={this.props.itemsRentalAds.currentPage}
          totalPageSize={this.props.itemsRentalAds.totalPageSize}
          loadRentalAds={this.props.loadRentalAds}
          chooseCurrentPage={this.props.chooseCurrentPage}
        />
      </Wrap>
    );
  }
}

export default Board;
