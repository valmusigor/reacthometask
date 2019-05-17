import React from 'react';
import { Wrapper, Item } from './style';

const Paginator = (props) => {
  const countPage = Math.ceil(props.totalPageSize / 3);
  const itemPage = [];
  for (let i = 1; i <= countPage; i++) { itemPage.push(i); }
  const handleClick = (event) => {
    props.chooseCurrentPage(event.target.id);
    props.loadRentalAds();
  };
  return (
    <Wrapper>
      {itemPage.map(elem => (
        <Item
          key={elem - 1}
          id={elem - 1}
          onClick={handleClick}
          active={(props.currentPage == (elem - 1)) ? 'red' : 'inherit'}
        >
          {elem}
        </Item>
      ))}
    </Wrapper>
  );
};

export default Paginator;
