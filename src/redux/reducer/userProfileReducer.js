const FETCH_ERROR = 'fetchErrorUs';
const FETCH_LOADING = 'fetchLoadingUs';
const FETCH_SUCCESS = 'fetchSuccessUs';
export const USER_FETCH_REQUEST = 'userFetchRequest';

export const actionFectchErrorUser = status => ({ type: FETCH_ERROR, status });
export const actionFectchLoadingUser = status => ({ type: FETCH_LOADING, status });
export const actionFectchSuccessUser = data => ({ type: FETCH_SUCCESS, data });
export const actionFetchRequestUser = () => ({ type: USER_FETCH_REQUEST });

const initialState = {
  login: '',
  email: '',
  dataReg: '',
  firma: '',
  unp: '',
  address: '',
  tel: '',
  status: 'wait',
};

const userProfileReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case FETCH_ERROR:
      stateCopy.statusExchangeRates = action.status;
      return stateCopy;
    case FETCH_LOADING:
      stateCopy.statusExchangeRates = action.status;
      return stateCopy;
    case FETCH_SUCCESS:
      console.log(action.data);
      stateCopy.login = action.data.login;
      stateCopy.email = action.data.email;
      stateCopy.dataReg = action.data.dataReg;
      stateCopy.firma = action.data.firma;
      stateCopy.unp = action.data.unp;
      stateCopy.address = action.data.address;
      stateCopy.tel = action.data.tel;
      stateCopy.status = 'success';
      return stateCopy;
    default:
      return state;
  }
};

export default userProfileReducer;
