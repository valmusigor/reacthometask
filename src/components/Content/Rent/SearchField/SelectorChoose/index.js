import React from 'react';
import { Wrapper } from './style';

const SelectorChoose = ({
  itemsSearch: {
    selectedValue,
    title,
    listValue,
  },
  change,
}) => {
  const handleOnchange = (event) => {
    change(event.target.value);
  };
  return (
    <Wrapper>
      <div>{title}</div>
      <select value={selectedValue} onChange={handleOnchange}>
        {listValue.map(elem => <option key={elem.id} value={elem.value}>{elem.label}</option>)}
      </select>
    </Wrapper>
  );
};

export default SelectorChoose;
