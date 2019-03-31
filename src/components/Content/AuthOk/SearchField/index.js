import React from 'react';
import * as s from './style';

const SearchField = (props) => (
    <s.Field>
      <s.Text type="text" id="text" placeholder="enter text"  value={props.search} onChange={props.changeSearch} />
      <s.Btn onClick={props.clickSearch} >Поиск</s.Btn>
    </s.Field>
);
export default SearchField;