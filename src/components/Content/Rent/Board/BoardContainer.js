import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionSearchAds, actionCurrentPage } from '../../../../redux/reducer/rentalAdsReducer';
import Board from './index';

const mapStateToProps = state => ({
  itemsRentalAds: state.itemsRentalAds,
});

const mapDispatchToProps = dispatch => ({
  loadRentalAds: () => {
    dispatch(actionSearchAds());
  },
  chooseCurrentPage: (numberPage) => {
    dispatch(actionCurrentPage(numberPage));
  },
});

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(Board));

export default BoardContainer;
