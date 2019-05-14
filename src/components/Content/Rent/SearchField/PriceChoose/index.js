import React from 'react';
import { Wrapper, Range, Title } from './style';

const PriceChoose = ({
  name,
  itemsSearch: {
    legend,
    minValue,
    maxValue,
    id,
    rangeValue,
  },
  change,
}) => {
  const handleChange = (event) => {
    change(event.target.value);
  };
  return (
    <Wrapper>
      <legend>{legend}</legend>
      <Range
        type="range"
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        list={id}
      />
      <Title>{name}</Title>
      <datalist id={id}>
        {rangeValue.map(elem => <option key={elem.id} value={elem.value} label={elem.label} />)}
      </datalist>
    </Wrapper>
  );
};

export default PriceChoose;
