import React from 'react';
import { Wrapper, GroupButton } from './style';

const CurrencyChoose = (props) => {
  const handleClick = (event) => {
    props.changeCurrency(event.target.id);
  };
  return (
    <Wrapper>
      <div>Цена</div>
      <GroupButton onClick={handleClick}>
        <button id="usd" type="button">USD</button>
        <button id="evr" type="button">EVR</button>
        <button id="byr" type="button">BYR</button>
      </GroupButton>
    </Wrapper>
  );
};
export default CurrencyChoose;
