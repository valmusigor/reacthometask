import { connect } from 'react-redux';
import { actionSearchAds } from '../../../../redux/reducer/rentalAdsReducer';
import Board from './index';

const mapStateToProps = state => ({
  itemsRentalAds: state.itemsRentalAds,
});

const mapDispatchToProps = dispatch => ({
  loadRentalAds: () => {
    dispatch(actionSearchAds());
  },
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
