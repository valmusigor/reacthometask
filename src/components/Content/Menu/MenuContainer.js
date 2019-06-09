import { connect } from 'react-redux';
import {
  actionInputLogin, actionInputPass, actionInputPassRep, actionClickAuth,
} from '../../../redux/reducer/autorizeReducer';
import Menu from './index';

const mapStateToProps = state => ({
  nameItem: state.dataAutorize.name,
  stateSignIn: state.dataAutorize.signIn,
  stateSignUp: state.dataAutorize.signUp,
}
);
const mapDispatchToProps = dispatch => ({
  clickAuth: (id, history) => {
    dispatch(actionClickAuth((id === 'btnIn') ? 'signin' : 'signup', history));
  },
  inputLogin: (value, id) => {
    dispatch(actionInputLogin(value, (id === 'emailIn') ? 'signin' : 'signup'));
  },
  inputPass: (value, id) => {
    dispatch(actionInputPass(value, (id === 'passIn') ? 'signin' : 'signup'));
  },
  inputPassRep: (value) => {
    dispatch(actionInputPassRep(value));
  },
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;
