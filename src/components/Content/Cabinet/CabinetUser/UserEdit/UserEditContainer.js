import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  actionFetchRequestUser, changeLogin, changeEmail, changeFirma, changeUnp, changeAddress,
  changeTel, fetchEditRequestUser,
} from '../../../../../redux/reducer/userProfileReducer';
import UserEdit from './index';

const mapStateToProps = state => ({ userProfile: state.userProfile });
/* const mapDispatchToProps = dispatch => ({
  userProfileView: () => {
    dispatch(actionFetchRequestUser());
  },
}); */

const UserEditContainer = withRouter(connect(mapStateToProps,
  {
    userProfileView: actionFetchRequestUser,
    changeLogin,
    changeEmail,
    changeFirma,
    changeUnp,
    changeAddress,
    changeTel,
    fetchEditRequestUser,
  })(UserEdit));

export default UserEditContainer;
