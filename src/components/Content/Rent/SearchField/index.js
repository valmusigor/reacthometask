import React from 'react';
import { Wrapper, ItemSearch } from './style';
import CurrencyChoose from './CurrencyChoose';
import PriceChoose from './PriceChoose';
import SelectorChoose from './SelectorChoose';

const SearchField = (props) => {
  const handleClick = () =>{
    props.viewRentalAds();
  }
return(
  <Wrapper>
    <ItemSearch>Всего объявлений <span>444</span></ItemSearch>
    <ItemSearch>
      <CurrencyChoose changeCurrency={props.changeCurrency}/>
    </ItemSearch>
    <ItemSearch>
      <PriceChoose itemsSearch={props.itemsSearchPrice} change={props.changePrice} name={props.itemsSearchPrice.price}/>
    </ItemSearch>
    <ItemSearch>
      <PriceChoose itemsSearch={props.itemsSearchSquare} change={props.changeSquare} name={props.itemsSearchSquare.square}/>
    </ItemSearch>
    <ItemSearch>
      <SelectorChoose itemsSearch={props.itemsSearchFirm} change={props.changeFirm} />
    </ItemSearch>
    <ItemSearch>
      <SelectorChoose itemsSearch={props.itemsSearchAddress} change={props.changeAddress} />
    </ItemSearch>
    <ItemSearch>
      <SelectorChoose itemsSearch={props.itemsSearchFloor} change={props.changeFloor} />
    </ItemSearch>
    <ItemSearch>
      <button type="button" onClick={handleClick}>Найти</button>
    </ItemSearch>
  </Wrapper>

);
}

export default SearchField;
