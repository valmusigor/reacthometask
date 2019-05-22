import { connect } from 'react-redux';
import { actionFetchRequestUser } from '../../../../redux/reducer/userProfileReducer';
import CabinetUser from './index';

const mapStateToProps = state => ({ userProfile: state.userProfile });
const mapDispatchToProps = dispatch => ({
  userProfileView: () => {
    dispatch(actionFetchRequestUser());
  },
});

const CabinetUserContainer = connect(mapStateToProps, mapDispatchToProps)(CabinetUser);

export default CabinetUserContainer;
