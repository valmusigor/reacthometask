import { connect } from 'react-redux';
import { actionHeaderInit } from '../../../redux/reducer/headerReducer';
import Navbar from './index';

const mapStateToProps = state => ({ itemsHeader: state.itemsHeader });
const mapDispatchToProps = dispatch => ({
  renderCurencyExchange: () => {
    dispatch(actionHeaderInit());
  },
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
