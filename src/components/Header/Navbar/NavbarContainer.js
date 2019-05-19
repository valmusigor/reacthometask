import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionHeaderInit } from '../../../redux/reducer/headerReducer';
import Navbar from './index';

const mapStateToProps = state => ({ itemsHeader: state.itemsHeader });
const mapDispatchToProps = dispatch => ({
  renderCurencyExchange: () => {
    dispatch(actionHeaderInit());
  },
});

const NavbarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

export default NavbarContainer;
