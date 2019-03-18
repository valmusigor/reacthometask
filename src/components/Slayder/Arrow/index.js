import React from 'react';
import arrowleft from './images/arrow-left.png';
import arrowright from './images/arrow-right.png';

const Arrow = props => (
  <div onClick = {props.eve}>
    <img src={(props.name == 'left') ? arrowleft : arrowright} />
  </div>
);

export default Arrow;
