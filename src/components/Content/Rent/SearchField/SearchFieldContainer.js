import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  actionChangePrice, actionChangeCurrency, actionChangeSquare, actionChangeFirm,
  actionChangeAddress, actionChangeFloor,
} from '../../../../redux/reducer/searchRentalAdsReducer';
import SearchField from './index';
import { actionSearchAds } from '../../../../redux/reducer/rentalAdsReducer';

const mapStateToProps = state => ({
  itemsSearchPrice: state.itemsSearchRentalAds.rangePrice,
  itemsSearchSquare: state.itemsSearchRentalAds.rangeSquare,
  itemsSearchFirm: state.itemsSearchRentalAds.selectorFirm,
  itemsSearchAddress: state.itemsSearchRentalAds.selectorAddress,
  itemsSearchFloor: state.itemsSearchRentalAds.selectorFloor,
});

const mapDispatchToProps = dispatch => ({
  changePrice: (price) => {
    dispatch(actionChangePrice(price));
  },
  changeSquare: (square) => {
    dispatch(actionChangeSquare(square));
  },
  changeFirm: (firm) => {
    dispatch(actionChangeFirm(firm));
  },
  changeAddress: (address) => {
    dispatch(actionChangeAddress(address));
  },
  changeFloor: (floor) => {
    dispatch(actionChangeFloor(floor));
  },
  changeCurrency: (currency) => {
    dispatch(actionChangeCurrency(currency));
  },
  viewRentalAds: () => {
    dispatch(actionSearchAds());
  },
});
const SearchFieldContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchField));

export default SearchFieldContainer;
