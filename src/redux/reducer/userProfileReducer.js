const FETCH_ERROR = 'fetchErrorUs';
const FETCH_ERROR_EXIST = 'fetchErrorUsEx';
const FETCH_LOADING = 'fetchLoadingUs';
const FETCH_SUCCESS = 'fetchSuccessUs';
const FETCH_SUCCESS_EDIT = 'fetchSuccessEditUs';
const CHANGE_LOGIN = 'changeLogin';
const CHANGE_EMAIL = 'changeEmail';
const CHANGE_FIRMA = 'changeFirma';
const CHANGE_UNP = 'changeUnp';
const CHANGE_ADDRESS = 'changeAddress';
const CHANGE_TEL = 'changeTel';
export const USER_FETCH_REQUEST = 'userFetchRequest';
export const USER_FETCH_EDIT_REQUEST = 'userFetchEditRequest';

export const actionFectchErrorUser = status => ({ type: FETCH_ERROR, status });
export const actionFectchErrorUserExist = (status, code) => ({ type: FETCH_ERROR_EXIST, status, code });
export const actionFectchLoadingUser = status => ({ type: FETCH_LOADING, status });
export const actionFectchSuccessUser = data => ({ type: FETCH_SUCCESS, data });
export const actionFectchSuccessEditUser = data => ({ type: FETCH_SUCCESS_EDIT, data });
export const actionFetchRequestUser = () => ({ type: USER_FETCH_REQUEST });
export const fetchEditRequestUser = history => ({ type: USER_FETCH_EDIT_REQUEST, history });
export const changeLogin = login => ({ type: CHANGE_LOGIN, login });
export const changeEmail = email => ({ type: CHANGE_EMAIL, email });
export const changeFirma = firma => ({ type: CHANGE_FIRMA, firma });
export const changeUnp = unp => ({ type: CHANGE_UNP, unp });
export const changeAddress = address => ({ type: CHANGE_ADDRESS, address });
export const changeTel = tel => ({ type: CHANGE_TEL, tel });

const initialState = {
  login: '',
  errorLogin: false,
  email: '',
  errorEmail: false,
  dataReg: '',
  firma: '',
  errorFirma: false,
  unp: '',
  errorUnp: false,
  address: '',
  errorAddress: false,
  tel: '',
  errorTel: false,
  status: 'wait',
};

const checkSpace = value => ((value.replace(/\s+/g, '').length === 0));

const userProfileReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case CHANGE_LOGIN:
      stateCopy.errorLogin = checkSpace(action.login);
      stateCopy.login = action.login;
      return stateCopy;
    case CHANGE_EMAIL:
      if (action.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        stateCopy.errorEmail = false;
      } else {
        stateCopy.errorEmail = true;
      }
      stateCopy.email = action.email;
      return stateCopy;
    case CHANGE_FIRMA:
      stateCopy.errorFirma = checkSpace(action.firma);
      stateCopy.firma = action.firma;
      return stateCopy;
    case CHANGE_UNP:
      stateCopy.errorUnp = checkSpace(action.unp);
      if (!stateCopy.errorUnp) {
        if (!action.unp.replace(/\s+/g, '').match(/^\d{9}$/i)) {
          stateCopy.errorUnp = true;
        }
      }
      stateCopy.unp = action.unp;
      return stateCopy;
    case CHANGE_ADDRESS:
      stateCopy.errorAddress = checkSpace(action.address);
      stateCopy.address = action.address;
      return stateCopy;
    case CHANGE_TEL:
      stateCopy.errorTel = checkSpace(action.tel);
      if (!stateCopy.errorTel) {
        if (!action.tel.replace(/\s+/g, '').match(/^(29|44|25|33){1,}[1-9]{1}[0-9]{6}$/i)) {
          stateCopy.errorTel = true;
        }
      }
      stateCopy.tel = action.tel;
      return stateCopy;
    case FETCH_ERROR:
      stateCopy.status = action.status;
      return stateCopy;
    case FETCH_LOADING:
      stateCopy.status = action.status;
      return stateCopy;
    case FETCH_SUCCESS:
      stateCopy.login = action.data.login;
      stateCopy.email = action.data.email;
      stateCopy.dataReg = action.data.dataReg;
      stateCopy.firma = action.data.firma;
      stateCopy.unp = action.data.unp;
      stateCopy.address = action.data.address;
      stateCopy.tel = action.data.tel;
      stateCopy.status = 'success';
      return stateCopy;
    case FETCH_SUCCESS_EDIT:
      stateCopy.status = 'success';
      return stateCopy;
    case FETCH_ERROR_EXIST:
      stateCopy.status = action.status;
      if (action.code === 'login') {
        stateCopy.errorLogin = true;
      } else if (action.code === 'email') {
        stateCopy.errorEmail = true;
      } else if (action.code === 'unp') {
        stateCopy.errorUnp = true;
      } else if (action.code === 'tel') { stateCopy.errorTel = true; }
      return stateCopy;
    default:
      return state;
  }
};

export default userProfileReducer;
