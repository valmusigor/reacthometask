import React from 'react';
import { Wrapper, Selector } from './style';

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
      <Selector value={selectedValue} onChange={handleOnchange}>
        {listValue.map(elem => <option key={elem.id} value={elem.value}>{elem.label}</option>)}
      </Selector>
    </Wrapper>
  );
};

export default SelectorChoose;
